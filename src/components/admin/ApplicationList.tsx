import { useState, useEffect } from 'react';
import { Check, X, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Application, Accommodation } from '@/types/accommodation';
import { applicationAPI, accommodationAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const ApplicationList = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [accommodations, setAccommodations] = useState<Record<string, Accommodation>>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [appsData, accomData] = await Promise.all([
        applicationAPI.getAll(),
        accommodationAPI.getAll({}),
      ]);
      
      setApplications(appsData);
      
      const accomMap: Record<string, Accommodation> = {};
      accomData.forEach((acc) => {
        accomMap[acc.id] = acc;
      });
      setAccommodations(accomMap);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load applications',
        variant: 'destructive',
      });
    }
  };

  const handleStatusUpdate = async (id: string, status: Application['status']) => {
    try {
      await applicationAPI.updateStatus(id, status);
      toast({
        title: 'Success',
        description: `Application ${status.toLowerCase()}`,
      });
      loadData();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update application status',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="grid gap-4">
      {applications.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No applications yet.
          </CardContent>
        </Card>
      ) : (
        applications.map((application) => {
          const accommodation = accommodations[application.accommodationId];
          
          return (
            <Card key={application.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <Badge
                        variant={
                          application.status === 'Approved'
                            ? 'default'
                            : application.status === 'Rejected'
                            ? 'destructive'
                            : 'secondary'
                        }
                      >
                        {application.status}
                      </Badge>
                    </div>
                    <CardTitle>{application.userName}</CardTitle>
                    <CardDescription>
                      Applied for: {accommodation?.title || 'Unknown property'}
                    </CardDescription>
                  </div>
                  {application.status === 'Pending' && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleStatusUpdate(application.id, 'Approved')}
                      >
                        <Check className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleStatusUpdate(application.id, 'Rejected')}
                      >
                        <X className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${application.userEmail}`} className="hover:underline">
                      {application.userEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${application.userPhone}`} className="hover:underline">
                      {application.userPhone}
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Message:</h4>
                  <p className="text-sm text-muted-foreground">{application.message}</p>
                </div>

                <div className="text-xs text-muted-foreground">
                  Applied on {new Date(application.createdAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default ApplicationList;
