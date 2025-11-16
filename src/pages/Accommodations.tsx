import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Home, MapPin, DollarSign, Bed, Bath, LogOut } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accommodation, ReligiousPreference, AccommodationType } from '@/types/accommodation';
import { accommodationAPI, authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const Accommodations = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [religiousFilter, setReligiousFilter] = useState<string>('Any');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    const user = authAPI.getCurrentUser();
    if (!user) {
      navigate('/auth');
      return;
    }

    loadAccommodations();
  }, [religiousFilter, typeFilter, locationSearch]);

  const loadAccommodations = async () => {
    try {
      const data = await accommodationAPI.getAll({
        religiousPreference: religiousFilter,
        type: typeFilter,
        location: locationSearch,
      });
      setAccommodations(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load accommodations',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = async () => {
    await authAPI.logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out',
    });
    navigate('/auth');
  };

  const handleApply = (accommodationId: string) => {
    navigate(`/apply/${accommodationId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Find Accommodation</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Religious Preference</label>
              <Select value={religiousFilter} onValueChange={setReligiousFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="Muslim">Muslim</SelectItem>
                  <SelectItem value="Non-Muslim">Non-Muslim</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Accommodation Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Room">Room</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                  <SelectItem value="Shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Input
                placeholder="Search location..."
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <main className="container mx-auto px-4 py-8">
        {accommodations.length === 0 ? (
          <div className="text-center py-12">
            <Home className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No accommodations found</h3>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={accommodation.status === 'Available' ? 'default' : 'secondary'}>
                      {accommodation.status}
                    </Badge>
                    <Badge variant="outline">{accommodation.religiousPreference}</Badge>
                  </div>
                  <CardTitle className="text-xl">{accommodation.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{accommodation.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4 text-muted-foreground" />
                      <span>{accommodation.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4 text-muted-foreground" />
                      <span>{accommodation.bathrooms} Baths</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <DollarSign className="h-5 w-5" />
                    <span>{accommodation.price}/month</span>
                  </div>

                  {accommodation.amenities.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {accommodation.amenities.slice(0, 3).map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => handleApply(accommodation.id)}
                    disabled={accommodation.status !== 'Available'}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => navigate(`/accommodation/${accommodation.id}`)}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Accommodations;
