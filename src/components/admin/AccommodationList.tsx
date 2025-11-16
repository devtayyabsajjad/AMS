import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accommodation } from '@/types/accommodation';
import { accommodationAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import EditAccommodation from './EditAccommodation';

const AccommodationList = () => {
  const { toast } = useToast();
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [editingAccommodation, setEditingAccommodation] = useState<Accommodation | null>(null);

  useEffect(() => {
    loadAccommodations();
  }, []);

  const loadAccommodations = async () => {
    try {
      const data = await accommodationAPI.getAll({});
      setAccommodations(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load accommodations',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this accommodation?')) return;

    try {
      await accommodationAPI.delete(id);
      toast({
        title: 'Success',
        description: 'Accommodation deleted successfully',
      });
      loadAccommodations();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete accommodation',
        variant: 'destructive',
      });
    }
  };

  if (editingAccommodation) {
    return (
      <EditAccommodation
        accommodation={editingAccommodation}
        onClose={() => {
          setEditingAccommodation(null);
          loadAccommodations();
        }}
      />
    );
  }

  return (
    <div className="grid gap-4">
      {accommodations.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No accommodations yet. Click "Add New" to create one.
          </CardContent>
        </Card>
      ) : (
        accommodations.map((accommodation) => (
          <Card key={accommodation.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    <Badge variant={accommodation.status === 'Available' ? 'default' : 'secondary'}>
                      {accommodation.status}
                    </Badge>
                    <Badge variant="outline">{accommodation.religiousPreference}</Badge>
                    <Badge variant="outline">{accommodation.type}</Badge>
                  </div>
                  <CardTitle>{accommodation.title}</CardTitle>
                  <CardDescription className="mt-1">{accommodation.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => setEditingAccommodation(accommodation)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleDelete(accommodation.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">{accommodation.location}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Price:</span>
                  <p className="font-medium">${accommodation.price}/month</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Bedrooms:</span>
                  <p className="font-medium">{accommodation.bedrooms}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Bathrooms:</span>
                  <p className="font-medium">{accommodation.bathrooms}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default AccommodationList;
