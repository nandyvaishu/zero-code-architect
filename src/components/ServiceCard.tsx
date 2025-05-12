
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group h-full card-hover">
      <CardHeader>
        <div className="bg-customGreen-50 text-customGreen-500 p-3 rounded-lg w-fit mb-4 
                      group-hover:bg-customGreen-500 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
