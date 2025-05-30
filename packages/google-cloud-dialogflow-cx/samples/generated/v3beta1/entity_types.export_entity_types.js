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



'use strict';

function main(parent, entityTypes) {
  // [START dialogflow_v3beta1_generated_EntityTypes_ExportEntityTypes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the parent agent to export entity types.
   *  Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The name of the entity types to export.
   *  Format:
   *  `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/entityTypes/<EntityTypeID>`.
   */
  // const entityTypes = ['abc','def']
  /**
   *  Optional. The Google Cloud
   *  Storage (https://cloud.google.com/storage/docs/) URI to export the entity
   *  types to. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`.
   *  Dialogflow performs a write operation for the Cloud Storage object
   *  on the caller's behalf, so your request authentication must
   *  have write permissions for the object. For more information, see
   *  Dialogflow access
   *  control (https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
   */
  // const entityTypesUri = 'abc123'
  /**
   *  Optional. The option to return the serialized entity types inline.
   */
  // const entityTypesContentInline = true
  /**
   *  Optional. The data format of the exported entity types. If not specified,
   *  `BLOB` is assumed.
   */
  // const dataFormat = {}
  /**
   *  Optional. The language to retrieve the entity type for. The following
   *  fields are language dependent:
   *  *   `EntityType.entities.value`
   *  *   `EntityType.entities.synonyms`
   *  *   `EntityType.excluded_phrases.value`
   *  If not specified, all language dependent fields will be retrieved.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {EntityTypesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new EntityTypesClient();

  async function callExportEntityTypes() {
    // Construct request
    const request = {
      parent,
      entityTypes,
    };

    // Run request
    const [operation] = await cxClient.exportEntityTypes(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callExportEntityTypes();
  // [END dialogflow_v3beta1_generated_EntityTypes_ExportEntityTypes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
