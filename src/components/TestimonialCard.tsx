interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm card-hover">
      <div className="flex items-center space-x-4 mb-4">
        <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
};