import * as Types from '../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CategoryByNameVariables = {
  name: Types.Scalars['String'];
};


export type CategoryByName = (
  { __typename: 'Query' }
  & { categoryByName: (
    { __typename: 'Category' }
    & Pick<Types.Category, 'id' | 'name' | 'description' | 'url' | 'parent' | 'icon'>
    & { products: Array<(
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'url' | 'description' | 'price' | 'icon'>
      & { images: Array<(
        { __typename: 'ImageProd' }
        & Pick<Types.ImageProd, 'url'>
      )>, category?: Types.Maybe<(
        { __typename: 'Category' }
        & Pick<Types.Category, 'name'>
      )> }
    )> }
  ) }
);


export const CategoryByNameDocument = gql`
    query CategoryByName($name: String!) {
  categoryByName(name: $name) {
    id
    name
    description
    url
    parent
    icon
    products {
      id
      name
      url
      description
      price
      icon
      images {
        url
      }
      category {
        name
      }
    }
  }
}
    `;

/**
 * __useCategoryByName__
 *
 * To run a query within a React component, call `useCategoryByName` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByName` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByName({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCategoryByName(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryByName, CategoryByNameVariables>) {
        return ApolloReactHooks.useQuery<CategoryByName, CategoryByNameVariables>(CategoryByNameDocument, baseOptions);
      }
export function useCategoryByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryByName, CategoryByNameVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryByName, CategoryByNameVariables>(CategoryByNameDocument, baseOptions);
        }
export type CategoryByNameHookResult = ReturnType<typeof useCategoryByName>;
export type CategoryByNameLazyQueryHookResult = ReturnType<typeof useCategoryByNameLazyQuery>;
export type CategoryByNameQueryResult = ApolloReactCommon.QueryResult<CategoryByName, CategoryByNameVariables>;