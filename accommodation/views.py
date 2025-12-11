from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import messages
from django.db.models import Q
from django.http import JsonResponse
from .models import Accommodation, Application, User
from .forms import AccommodationForm, ApplicationForm, UserSignupForm


def index(request):
    """Home page"""
    return render(request, 'accommodation/index.html')


def auth_login(request):
    """User login view"""
    if request.user.is_authenticated:
        if request.user.role == 'admin':
            return redirect('admin_dashboard')
        return redirect('accommodations')
    
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=password)
            
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome back, {user.get_full_name() or user.email}!')
                if user.role == 'admin':
                    return redirect('admin_dashboard')
                return redirect('accommodations')
            else:
                messages.error(request, 'Invalid email or password')
        except User.DoesNotExist:
            messages.error(request, 'Invalid email or password')
    
    return render(request, 'accommodation/auth.html', {'mode': 'login'})


def auth_signup(request):
    """User signup view"""
    if request.user.is_authenticated:
        return redirect('accommodations')
    
    if request.method == 'POST':
        form = UserSignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f'Welcome, {user.get_full_name() or user.email}!')
            return redirect('accommodations')
    else:
        form = UserSignupForm()
    
    return render(request, 'accommodation/auth.html', {'mode': 'signup', 'form': form})


def auth_logout(request):
    """User logout view"""
    logout(request)
    messages.success(request, 'You have been successfully logged out')
    return redirect('index')


@login_required
def accommodations(request):
    """Accommodation listing page with filters"""
    accommodations_list = Accommodation.objects.all()
    
    # Apply filters
    religious_filter = request.GET.get('religious_preference', '')
    type_filter = request.GET.get('type', '')
    location_search = request.GET.get('location', '')
    
    if religious_filter and religious_filter not in ['Any', '']:
        accommodations_list = accommodations_list.filter(
            Q(religious_preference=religious_filter) | Q(religious_preference='Any')
        )
    
    if type_filter:
        accommodations_list = accommodations_list.filter(type=type_filter)
    
    if location_search:
        accommodations_list = accommodations_list.filter(
            Q(location__icontains=location_search) | Q(address__icontains=location_search)
        )
    
    context = {
        'accommodations': accommodations_list,
        'religious_filter': religious_filter,
        'type_filter': type_filter,
        'location_search': location_search,
    }
    return render(request, 'accommodation/accommodations.html', context)


@login_required
def my_applications(request):
    """User dashboard - view their own applications"""
    applications_list = Application.objects.filter(user=request.user).order_by('-created_at')
    
    # Count by status
    pending_count = applications_list.filter(status='Pending').count()
    approved_count = applications_list.filter(status='Approved').count()
    rejected_count = applications_list.filter(status='Rejected').count()
    
    context = {
        'applications': applications_list,
        'pending_count': pending_count,
        'approved_count': approved_count,
        'rejected_count': rejected_count,
        'total_count': applications_list.count(),
    }
    return render(request, 'accommodation/my_applications.html', context)


@login_required
def apply_accommodation(request, accommodation_id):
    """Apply for accommodation"""
    # Prevent admin users from applying - they should only manage accommodations
    if request.user.role == 'admin':
        messages.error(request, 'Administrators cannot apply for accommodations. Please use the Admin Dashboard to manage listings.')
        return redirect('admin_dashboard')
    
    accommodation = get_object_or_404(Accommodation, id=accommodation_id)
    
    if request.method == 'POST':
        form = ApplicationForm(request.POST)
        if form.is_valid():
            application = form.save(commit=False)
            application.accommodation = accommodation
            application.user = request.user
            application.user_name = request.user.get_full_name() or request.user.email
            application.user_email = request.user.email
            application.user_phone = request.user.phone or form.cleaned_data.get('user_phone', '')
            application.save()
            
            messages.success(request, 'Your application has been submitted successfully!')
            return redirect('accommodations')
    else:
        initial_data = {
            'user_name': request.user.get_full_name() or request.user.email,
            'user_email': request.user.email,
            'user_phone': request.user.phone or '',
        }
        form = ApplicationForm(initial=initial_data)
    
    context = {
        'accommodation': accommodation,
        'form': form,
    }
    return render(request, 'accommodation/apply.html', context)


def is_admin(user):
    """Check if user is admin"""
    return user.is_authenticated and user.role == 'admin'


@login_required
@user_passes_test(is_admin)
def admin_dashboard(request):
    """Admin dashboard"""
    accommodations_list = Accommodation.objects.all()
    applications_list = Application.objects.all()
    users_list = User.objects.all()
    pending_count = applications_list.filter(status='Pending').count()
    
    context = {
        'accommodations': accommodations_list,
        'applications': applications_list,
        'users': users_list,
        'pending_count': pending_count,
        'total_users': users_list.count(),
    }
    return render(request, 'accommodation/admin.html', context)


@login_required
@user_passes_test(is_admin)
def create_accommodation(request):
    """Create new accommodation"""
    if request.method == 'POST':
        form = AccommodationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Accommodation created successfully!')
            return redirect('admin_dashboard')
    else:
        form = AccommodationForm()
    
    return render(request, 'accommodation/create_accommodation.html', {'form': form})


@login_required
@user_passes_test(is_admin)
def edit_accommodation(request, accommodation_id):
    """Edit accommodation"""
    accommodation = get_object_or_404(Accommodation, id=accommodation_id)
    
    if request.method == 'POST':
        form = AccommodationForm(request.POST, instance=accommodation)
        if form.is_valid():
            form.save()
            messages.success(request, 'Accommodation updated successfully!')
            return redirect('admin_dashboard')
    else:
        form = AccommodationForm(instance=accommodation)
    
    return render(request, 'accommodation/edit_accommodation.html', {'form': form, 'accommodation': accommodation})


@login_required
@user_passes_test(is_admin)
def delete_accommodation(request, accommodation_id):
    """Delete accommodation"""
    accommodation = get_object_or_404(Accommodation, id=accommodation_id)
    
    if request.method == 'POST':
        accommodation.delete()
        messages.success(request, 'Accommodation deleted successfully!')
        return redirect('admin_dashboard')
    
    return render(request, 'accommodation/delete_accommodation.html', {'accommodation': accommodation})


@login_required
@user_passes_test(is_admin)
def update_application_status(request, application_id):
    """Update application status"""
    application = get_object_or_404(Application, id=application_id)
    
    if request.method == 'POST':
        status = request.POST.get('status')
        if status in ['Pending', 'Approved', 'Rejected']:
            application.status = status
            application.save()
            messages.success(request, f'Application {status.lower()}!')
    
    return redirect('admin_dashboard')


@login_required
@user_passes_test(is_admin)
def view_application(request, application_id):
    """View full application details with message"""
    application = get_object_or_404(Application, id=application_id)
    return render(request, 'accommodation/view_application.html', {'application': application})


@login_required
@user_passes_test(is_admin)
def manage_users(request):
    """List all users"""
    users_list = User.objects.all().order_by('-date_joined')
    return render(request, 'accommodation/manage_users.html', {'users': users_list})


@login_required
@user_passes_test(is_admin)
def create_user(request):
    """Create new user"""
    if request.method == 'POST':
        form = UserSignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            messages.success(request, f'User {user.email} created successfully!')
            return redirect('manage_users')
    else:
        form = UserSignupForm()
    
    return render(request, 'accommodation/create_user.html', {'form': form})


@login_required
@user_passes_test(is_admin)
def view_user(request, user_id):
    """View user details and their applications"""
    user = get_object_or_404(User, id=user_id)
    user_applications = Application.objects.filter(user=user).order_by('-created_at')
    return render(request, 'accommodation/view_user.html', {
        'user_obj': user,
        'applications': user_applications
    })


@login_required
@user_passes_test(is_admin)
def edit_user(request, user_id):
    """Edit user details"""
    user = get_object_or_404(User, id=user_id)
    
    if request.method == 'POST':
        user.email = request.POST.get('email', user.email)
        user.first_name = request.POST.get('first_name', user.first_name)
        user.last_name = request.POST.get('last_name', user.last_name)
        user.phone = request.POST.get('phone', user.phone)
        user.role = request.POST.get('role', user.role)
        user.religious_preference = request.POST.get('religious_preference', user.religious_preference) or None
        user.is_active = request.POST.get('is_active') == 'on'
        user.save()
        messages.success(request, 'User updated successfully!')
        return redirect('view_user', user_id=user.id)
    
    return render(request, 'accommodation/edit_user.html', {'user_obj': user})


@login_required
@user_passes_test(is_admin)
def delete_user(request, user_id):
    """Delete user"""
    user = get_object_or_404(User, id=user_id)
    
    if request.method == 'POST':
        if user == request.user:
            messages.error(request, 'You cannot delete your own account!')
            return redirect('view_user', user_id=user.id)
        user.delete()
        messages.success(request, 'User deleted successfully!')
        return redirect('manage_users')
    
    return render(request, 'accommodation/delete_user.html', {'user_obj': user})


def about(request):
    """About page"""
    return render(request, 'accommodation/about.html')


def contact(request):
    """Contact page"""
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Here you can add email sending logic or save to database
        messages.success(request, 'Thank you for contacting us! We will get back to you soon.')
        return redirect('contact')
    
    return render(request, 'accommodation/contact.html')

