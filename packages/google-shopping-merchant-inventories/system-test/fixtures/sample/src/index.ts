// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {LocalInventoryServiceClient, RegionalInventoryServiceClient} from '@google-shopping/inventories';

// check that the client class type name can be used
function doStuffWithLocalInventoryServiceClient(client: LocalInventoryServiceClient) {
  client.close();
}
function doStuffWithRegionalInventoryServiceClient(client: RegionalInventoryServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const localInventoryServiceClient = new LocalInventoryServiceClient();
  doStuffWithLocalInventoryServiceClient(localInventoryServiceClient);
  // check that the client instance can be created
  const regionalInventoryServiceClient = new RegionalInventoryServiceClient();
  doStuffWithRegionalInventoryServiceClient(regionalInventoryServiceClient);
}

main();
