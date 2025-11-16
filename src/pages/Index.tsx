import { useNavigate } from 'react-router-dom';
import { Building2, Home, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Building2 className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Accommodation Management System</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find your perfect home with culturally sensitive accommodation options. 
          Filter by religious preferences and apply seamlessly.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/auth')}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/accommodations')}>
            Browse Accommodations
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Religious Preferences</CardTitle>
              <CardDescription>
                Filter accommodations based on your religious preferences for a comfortable living experience
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Home className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Easy Application</CardTitle>
              <CardDescription>
                Apply to accommodations directly through the platform with a simple application process
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>
                Property managers can easily post, manage, and update accommodation listings
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl">Ready to Find Your Home?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Join our platform today and discover accommodations that match your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" variant="secondary" onClick={() => navigate('/auth')}>
              Sign Up Now
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
