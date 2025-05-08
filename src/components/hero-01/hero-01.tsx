import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

interface Hero01Props {
  badgeText?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero01: React.FC<Hero01Props> = ({
  badgeText,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12 md:py-16 bg-background">
      <div className="text-center max-w-3xl">
        {badgeText && (
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none text-primary-foreground mb-6">
            {badgeText}
          </Badge>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold text-foreground">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          {description}
        </p>
        {(primaryButtonText || secondaryButtonText) && (
          <div className="mt-12 flex items-center justify-center gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Button size="lg" className="rounded-full text-base" asChild>
                <a href={primaryButtonLink}>{primaryButtonText} <ArrowUpRight className="!h-5 !w-5 ml-2" /></a>
              </Button>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
                asChild
              >
                <a href={secondaryButtonLink}><CirclePlay className="!h-5 !w-5 mr-2" /> {secondaryButtonText}</a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero01;
