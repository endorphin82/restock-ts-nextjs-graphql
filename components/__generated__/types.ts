export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  products: Array<Product>;
  icon: Scalars['String'];
};


export type CategoryProductsArgs = {
  skip?: Maybe<Scalars['Int']>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ImageCat = {
  __typename?: 'ImageCat';
  id: Scalars['Int'];
};

export type ImageProd = {
  __typename?: 'ImageProd';
  id: Scalars['Int'];
  product?: Maybe<Product>;
  url: Scalars['String'];
  product_id?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  name: Scalars['String'];
  category?: Maybe<Category>;
  url: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  category_id?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  images: Array<ImageProd>;
};


export type ProductImagesArgs = {
  skip?: Maybe<Scalars['Int']>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  categories: Array<Category>;
  product?: Maybe<Product>;
  products: Array<Product>;
  productByName: Product;
  categoryByName: Category;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCategoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductByNameArgs = {
  name: Scalars['String'];
};


export type QueryCategoryByNameArgs = {
  name: Scalars['String'];
};
