import { Dumbbell, Cog, Heart, Package, Grid3X3 } from 'lucide-react';
import { cn } from '../utils/cn';

const iconMap: Record<string, React.ElementType> = {
  Grid3X3,
  Dumbbell,
  Cog,
  Heart,
  Package,
};

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-bold text-gray-800">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] || Package;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                isSelected
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className={cn(
                "rounded-full px-2 py-0.5 text-xs",
                isSelected ? "bg-white/20" : "bg-gray-200"
              )}>
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
