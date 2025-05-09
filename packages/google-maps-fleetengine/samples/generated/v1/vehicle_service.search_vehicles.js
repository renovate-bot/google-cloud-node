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

function main(parent, pickupPoint, pickupRadiusMeters, count, minimumCapacity, tripTypes, vehicleTypes, orderBy) {
  // [START fleetengine_v1_generated_VehicleService_SearchVehicles_async]
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
   *  Required. The pickup point to search near.
   */
  // const pickupPoint = {}
  /**
   *  The customer's intended dropoff location. The field is required if
   *  `trip_types` contains `TripType.SHARED`.
   */
  // const dropoffPoint = {}
  /**
   *  Required. Defines the vehicle search radius around the pickup point. Only
   *  vehicles within the search radius will be returned. Value must be between
   *  400 and 10000 meters (inclusive).
   */
  // const pickupRadiusMeters = 1234
  /**
   *  Required. Specifies the maximum number of vehicles to return. The value
   *  must be between 1 and 50 (inclusive).
   */
  // const count = 1234
  /**
   *  Required. Specifies the number of passengers being considered for a trip.
   *  The value must be greater than or equal to one. The driver is not
   *  considered in the capacity value.
   */
  // const minimumCapacity = 1234
  /**
   *  Required. Represents the type of proposed trip. Must include exactly one
   *  type. `UNKNOWN_TRIP_TYPE` is not allowed. Restricts the search to only
   *  those vehicles that can support that trip type.
   */
  // const tripTypes = [1,2,3,4]
  /**
   *  Restricts the search to only those vehicles that have sent location updates
   *  to Fleet Engine within the specified duration. Stationary vehicles still
   *  transmitting their locations are not considered stale. If this field is not
   *  set, the server uses five minutes as the default value.
   */
  // const maximumStaleness = {}
  /**
   *  Required. Restricts the search to vehicles with one of the specified types.
   *  At least one vehicle type must be specified. VehicleTypes with a category
   *  of `UNKNOWN` are not allowed.
   */
  // const vehicleTypes = [1,2,3,4]
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
   *  Restricts the search to only those vehicles with the specified attributes.
   *  This field is a conjunction/AND operation. A max of 50 required_attributes
   *  is allowed. This matches the maximum number of attributes allowed on a
   *  vehicle.
   */
  // const requiredAttributes = [1,2,3,4]
  /**
   *  Restricts the search to only those vehicles with at least one of
   *  the specified attributes in each `VehicleAttributeList`. Within each
   *  list, a vehicle must match at least one of the attributes. This field is an
   *  inclusive disjunction/OR operation in each `VehicleAttributeList` and a
   *  conjunction/AND operation across the collection of `VehicleAttributeList`.
   */
  // const requiredOneOfAttributes = [1,2,3,4]
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
   *  Restricts the search to only those vehicles with all the attributes in a
   *  `VehicleAttributeList`. Within each list, a
   *  vehicle must match all of the attributes. This field is a conjunction/AND
   *  operation in each `VehicleAttributeList` and inclusive disjunction/OR
   *  operation across the collection of `VehicleAttributeList`.
   */
  // const requiredOneOfAttributeSets = [1,2,3,4]
  /**
   *  Required. Specifies the desired ordering criterion for results.
   */
  // const orderBy = {}
  /**
   *  This indicates if vehicles with a single active trip are eligible for this
   *  search. This field is only used when `current_trips_present` is
   *  unspecified. When `current_trips_present` is unspecified  and  this field
   *  is `false`, vehicles with assigned trips are excluded from the search
   *  results. When `current_trips_present` is unspecified and this field is
   *  `true`, search results can include vehicles with one active trip that has a
   *  status of `ENROUTE_TO_DROPOFF`. When `current_trips_present` is specified,
   *  this field cannot be set to true.
   *  The default value is `false`.
   */
  // const includeBackToBack = true
  /**
   *  Indicates the trip associated with this `SearchVehicleRequest`.
   */
  // const tripId = 'abc123'
  /**
   *  This indicates if vehicles with active trips are eligible for this search.
   *  This must be set to something other than
   *  `CURRENT_TRIPS_PRESENT_UNSPECIFIED` if `trip_type` includes `SHARED`.
   */
  // const currentTripsPresent = {}
  /**
   *  Optional. A filter query to apply when searching vehicles. See
   *  http://aip.dev/160 for examples of the filter syntax.
   *  This field is designed to replace the `required_attributes`,
   *  `required_one_of_attributes`, and `required_one_of_attributes_sets` fields.
   *  If a non-empty value is specified here, the following fields must be empty:
   *  `required_attributes`, `required_one_of_attributes`, and
   *  `required_one_of_attributes_sets`.
   *  This filter functions as an AND clause with other constraints,
   *  such as `minimum_capacity` or `vehicle_types`.
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

  // Imports the Fleetengine library
  const {VehicleServiceClient} = require('@googlemaps/fleetengine').v1;

  // Instantiates a client
  const fleetengineClient = new VehicleServiceClient();

  async function callSearchVehicles() {
    // Construct request
    const request = {
      parent,
      pickupPoint,
      pickupRadiusMeters,
      count,
      minimumCapacity,
      tripTypes,
      vehicleTypes,
      orderBy,
    };

    // Run request
    const response = await fleetengineClient.searchVehicles(request);
    console.log(response);
  }

  callSearchVehicles();
  // [END fleetengine_v1_generated_VehicleService_SearchVehicles_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
