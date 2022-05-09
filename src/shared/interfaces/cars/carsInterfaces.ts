export interface Car {
  id: number;
  name: string;
  model: string;
  logo: string;
  image: string;
  images: [
    {
      image1: string;
      image2: string;
      image3: string;
    }
  ],
  price: number;
}
