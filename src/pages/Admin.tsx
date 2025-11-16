import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut, Home, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import AccommodationList from '@/components/admin/AccommodationList';
import ApplicationList from '@/components/admin/ApplicationList';
import CreateAccommodation from '@/components/admin/CreateAccommodation';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const user = authAPI.getCurrentUser();
    if (!user) {
      navigate('/auth');
      return;
    }
    if (user.role !== 'admin') {
      toast({
        title: 'Access Denied',
        description: 'You do not have admin privileges',
        variant: 'destructive',
      });
      navigate('/accommodations');
    }
  }, []);

  const handleLogout = async () => {
    await authAPI.logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out',
    });
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/accommodations')}>
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="accommodations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="accommodations" className="gap-2">
              <Home className="h-4 w-4" />
              Accommodations
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2">
              <Users className="h-4 w-4" />
              Applications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="accommodations" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Accommodations</h2>
              <Button onClick={() => setShowCreateForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>

            {showCreateForm ? (
              <CreateAccommodation onClose={() => setShowCreateForm(false)} />
            ) : (
              <AccommodationList />
            )}
          </TabsContent>

          <TabsContent value="applications">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Application Management</h2>
              <p className="text-muted-foreground">Review and manage accommodation applications</p>
            </div>
            <ApplicationList />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
