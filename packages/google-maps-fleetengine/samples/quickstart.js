// Copyright 2024 Google LLC
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

function main(parent, vehicleTypeCategories) {
  // [START fleetengine_quickstart]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The standard Fleet Engine request header.
   */
  // const header = {}
  /**
   *  Required. Must be in the format `providers/{provider}`.
   *  The provider must be the Project ID (for example, `sample-cloud-project`)
   *  of the Google Cloud Project of which the service account making
   *  this call is a member.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of vehicles to return.
   *  Default value: 100.
   */
  // const pageSize = 1234
  /**
   *  The value of the `next_page_token` provided by a previous call to
   *  `ListVehicles` so that you can paginate through groups of vehicles. The
   *  value is undefined if the filter criteria of the request is not the same as
   *  the filter criteria for the previous call to `ListVehicles`.
   */
  // const pageToken = 'abc123'
  /**
   *  Specifies the required minimum capacity of the vehicle. All vehicles
   *  returned will have a `maximum_capacity` greater than or equal to this
   *  value. If set, must be greater or equal to 0.
   */
  // const minimumCapacity = {}
  /**
   *  Restricts the response to vehicles that support at least one of the
   *  specified trip types.
   */
  // const tripTypes = [1,2,3,4]
  /**
   *  Restricts the response to vehicles that have sent location updates to Fleet
   *  Engine within the specified duration. Stationary vehicles still
   *  transmitting their locations are not considered stale. If present, must be
   *  a valid positive duration.
   */
  // const maximumStaleness = {}
  /**
   *  Required. Restricts the response to vehicles with one of the specified type
   *  categories. `UNKNOWN` is not allowed.
   */
  // const vehicleTypeCategories = [1,2,3,4]
  /**
   *  Callers can form complex logical operations using any combination of the
   *  `required_attributes`, `required_one_of_attributes`, and
   *  `required_one_of_attribute_sets` fields.
   *  `required_attributes` is a list; `required_one_of_attributes` uses a
   *  message which allows a list of lists. In combination, the two fields allow
   *  the composition of this expression:
   *  ```
   *  (required_attributes0  AND required_attributes1  AND ...)
   *  AND
   *  (required_one_of_attributes0 0  OR required_one_of_attributes0 1  OR
   *  ...)
   *  AND
   *  (required_one_of_attributes1 0  OR required_one_of_attributes1 1  OR
   *  ...)
   *  ```
   *  Restricts the response to vehicles with the specified attributes. This
   *  field is a conjunction/AND operation. A max of 50 required_attributes is
   *  allowed. This matches the maximum number of attributes allowed on a
   *  vehicle. Each repeated string should be of the format "key:value".
   */
  // const requiredAttributes = ['abc','def']
  /**
   *  Restricts the response to vehicles with at least one of the specified
   *  attributes in each `VehicleAttributeList`. Within each list, a vehicle must
   *  match at least one of the attributes. This field is an inclusive
   *  disjunction/OR operation in each `VehicleAttributeList` and a
   *  conjunction/AND operation across the collection of `VehicleAttributeList`.
   *  Each repeated string should be of the format
   *  "key1:value1|key2:value2|key3:value3".
   */
  // const requiredOneOfAttributes = ['abc','def']
  /**
   *  `required_one_of_attribute_sets` provides additional functionality.
   *  Similar to `required_one_of_attributes`, `required_one_of_attribute_sets`
   *  uses a message which allows a list of lists, allowing expressions such as
   *  this one:
   *  ```
   *  (required_attributes0  AND required_attributes1  AND ...)
   *  AND
   *  (
   *    (required_one_of_attribute_sets0 0  AND
   *    required_one_of_attribute_sets0 1  AND
   *    ...)
   *    OR
   *    (required_one_of_attribute_sets1 0  AND
   *    required_one_of_attribute_sets1 1  AND
   *    ...)
   *  )
   *  ```
   *  Restricts the response to vehicles that match all the attributes in a
   *  `VehicleAttributeList`. Within each list, a vehicle must match all of the
   *  attributes. This field is a conjunction/AND operation in each
   *  `VehicleAttributeList` and inclusive disjunction/OR operation across the
   *  collection of `VehicleAttributeList`. Each repeated string should be of the
   *  format "key1:value1|key2:value2|key3:value3".
   */
  // const requiredOneOfAttributeSets = ['abc','def']
  /**
   *  Restricts the response to vehicles that have this vehicle state.
   */
  // const vehicleState = {}
  /**
   *  Only return the vehicles with current trip(s).
   */
  // const onTripOnly = true
  /**
   *  Optional. A filter query to apply when listing vehicles. See
   *  http://aip.dev/160 for examples of the filter syntax.
   *  This field is designed to replace the `required_attributes`,
   *  `required_one_of_attributes`, and `required_one_of_attributes_sets` fields.
   *  If a non-empty value is specified here, the following fields must be empty:
   *  `required_attributes`, `required_one_of_attributes`, and
   *  `required_one_of_attributes_sets`.
   *  This filter functions as an AND clause with other constraints,
   *  such as `vehicle_state` or `on_trip_only`.
   *  Note that the only queries supported are on vehicle attributes (for
   *  example, `attributes.<key> = <value>` or `attributes.<key1> = <value1> AND
   *  attributes.<key2> = <value2>`). The maximum number of restrictions allowed
   *  in a filter query is 50.
   *  Also, all attributes are stored as strings, so the only supported
   *  comparisons against attributes are string comparisons. In order to compare
   *  against number or boolean values, the values must be explicitly quoted to
   *  be treated as strings (for example, `attributes.<key> = "10"` or
   *  `attributes.<key> = "true"`).
   */
  // const filter = 'abc123'
  /**
   *  Optional. A filter that limits the vehicles returned to those whose last
   *  known location was in the rectangular area defined by the viewport.
   */
  // const viewport = {}

  // Imports the Fleetengine library
  const {VehicleServiceClient} = require('@googlemaps/fleetengine').v1;

  // Instantiates a client
  const fleetengineClient = new VehicleServiceClient();

  async function callListVehicles() {
    // Construct request
    const request = {
      parent,
      vehicleTypeCategories,
    };

    // Run request
    const iterable = fleetengineClient.listVehiclesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListVehicles();
  // [END fleetengine_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
