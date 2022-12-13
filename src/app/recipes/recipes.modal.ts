import { Ingrediant } from '../shared/ingrediants.model';

export class Recipes {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingrediant[];

  constructor(
    name: string,
    description: string,
    imagepath: string,
    ingredients: Ingrediant[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagepath;
    this.ingredients = ingredients;
  }
}
