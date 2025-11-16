import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accommodation } from '@/types/accommodation';
import { accommodationAPI, applicationAPI, authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const Apply = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = authAPI.getCurrentUser();
    if (!user) {
      navigate('/auth');
      return;
    }

    loadAccommodation();
  }, [id]);

  const loadAccommodation = async () => {
    if (!id) return;
    try {
      const data = await accommodationAPI.getById(id);
      setAccommodation(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load accommodation details',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !accommodation) return;

    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const user = authAPI.getCurrentUser();

    try {
      await applicationAPI.create({
        accommodationId: id,
        userId: user?.id || '',
        userName: formData.get('name') as string,
        userEmail: formData.get('email') as string,
        userPhone: formData.get('phone') as string,
        message: formData.get('message') as string,
      });

      toast({
        title: 'Application submitted!',
        description: 'Your application has been sent to the property manager',
      });
      navigate('/accommodations');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit application',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!accommodation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  const user = authAPI.getCurrentUser();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Apply for Accommodation</CardTitle>
            <CardDescription>{accommodation.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={user?.name}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue={user?.phone}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message to Property Manager</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about yourself and why you're interested in this accommodation..."
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
