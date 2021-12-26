/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserCardFragment = {
    readonly bio: string | null;
    readonly company: string | null;
    readonly email: string;
    readonly id: string;
    readonly location: string | null;
    readonly login: string;
    readonly name: string | null;
    readonly url: unknown;
    readonly avatarUrl: unknown;
    readonly followers: {
        readonly totalCount: number;
    };
    readonly repositories: {
        readonly totalCount: number;
    };
    readonly starredRepositories: {
        readonly totalCount: number;
    };
    readonly " $refType": "UserCardFragment";
};
export type UserCardFragment$data = UserCardFragment;
export type UserCardFragment$key = {
    readonly " $data"?: UserCardFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserCardFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "company",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "location",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FollowerConnection",
      "kind": "LinkedField",
      "name": "followers",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "repositories",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StarredRepositoryConnection",
      "kind": "LinkedField",
      "name": "starredRepositories",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = 'bce4095a05b48876a017531130fd7cf2';
export default node;
