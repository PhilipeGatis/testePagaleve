/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserDetailQueryVariables = {
    login: string;
};
export type UserDetailQueryResponse = {
    readonly user: {
        readonly bio: string | null;
        readonly name: string | null;
    } | null;
};
export type UserDetailQuery = {
    readonly response: UserDetailQueryResponse;
    readonly variables: UserDetailQueryVariables;
};



/*
query UserDetailQuery(
  $login: String!
) {
  user(login: $login) {
    bio
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "24789326571c85f9b9db523b7f133e08",
    "id": null,
    "metadata": {},
    "name": "UserDetailQuery",
    "operationKind": "query",
    "text": "query UserDetailQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    bio\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee0061f8378b7032a395ec0ed45ea05e';
export default node;
