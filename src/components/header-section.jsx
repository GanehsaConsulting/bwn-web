import { Badge } from "./ui/badge";

export const HeaderSection = ({ badgeColor, badge, title1, title2, titleStyle }) => {
  return (
    <div className="space-y-4 font-poppins">
      <Badge
        variant="outline"
        className={`text-sm sm:text-lg md:text-xl rounded-full px-3 sm:px-4 md:px-5 py-1 md:py-2 w-fit ${badgeColor}`}
      >
        {badge}
      </Badge>
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold ${titleStyle} `}>
        {title1} <br /> {title2}
      </h1>
    </div>
  );
};
