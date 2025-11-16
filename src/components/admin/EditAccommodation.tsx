import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accommodation, AccommodationType, ReligiousPreference, AccommodationStatus } from '@/types/accommodation';
import { accommodationAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

interface EditAccommodationProps {
  accommodation: Accommodation;
  onClose: () => void;
}

const EditAccommodation = ({ accommodation, onClose }: EditAccommodationProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [amenities, setAmenities] = useState<string>(accommodation.amenities.join(', '));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      await accommodationAPI.update(accommodation.id, {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        type: formData.get('type') as AccommodationType,
        location: formData.get('location') as string,
        address: formData.get('address') as string,
        price: Number(formData.get('price')),
        religiousPreference: formData.get('religiousPreference') as ReligiousPreference,
        status: formData.get('status') as AccommodationStatus,
        bedrooms: Number(formData.get('bedrooms')),
        bathrooms: Number(formData.get('bathrooms')),
        amenities: amenities.split(',').map(a => a.trim()).filter(Boolean),
        contactEmail: formData.get('contactEmail') as string,
        contactPhone: formData.get('contactPhone') as string,
      });

      toast({
        title: 'Success',
        description: 'Accommodation updated successfully',
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update accommodation',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Edit Accommodation</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={accommodation.title} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select name="type" defaultValue={accommodation.type} required>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Room">Room</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                  <SelectItem value="Shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="religiousPreference">Religious Preference</Label>
              <Select name="religiousPreference" defaultValue={accommodation.religiousPreference} required>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Muslim">Muslim</SelectItem>
                  <SelectItem value="Non-Muslim">Non-Muslim</SelectItem>
                  <SelectItem value="Any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select name="status" defaultValue={accommodation.status} required>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Occupied">Occupied</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue={accommodation.location} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Input id="address" name="address" defaultValue={accommodation.address} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Monthly Price ($)</Label>
              <Input id="price" name="price" type="number" defaultValue={accommodation.price} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input id="bedrooms" name="bedrooms" type="number" min="0" defaultValue={accommodation.bedrooms} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input id="bathrooms" name="bathrooms" type="number" min="0" step="0.5" defaultValue={accommodation.bathrooms} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input id="contactEmail" name="contactEmail" type="email" defaultValue={accommodation.contactEmail} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input id="contactPhone" name="contactPhone" type="tel" defaultValue={accommodation.contactPhone} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" rows={3} defaultValue={accommodation.description} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amenities">Amenities (comma-separated)</Label>
            <Input
              id="amenities"
              placeholder="e.g., Parking, WiFi, Gym"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Accommodation'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditAccommodation;
