# TempApi.AugustApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createaugust**](AugustApi.md#createaugust) | **POST** /august | Creates the data
[**deleteaugust**](AugustApi.md#deleteaugust) | **DELETE** /august/{augustId} | Delete the element
[**getAllaugust**](AugustApi.md#getAllaugust) | **GET** /august/getAll | Get all the data
[**getByParamsaugust**](AugustApi.md#getByParamsaugust) | **GET** /august/getByParams | Get all the data based on user query
[**getaugust**](AugustApi.md#getaugust) | **GET** /august/{augustId} | Get the element
[**updateaugust**](AugustApi.md#updateaugust) | **PUT** /august/{augustId} | Updates the element



## createaugust

> August createaugust(august)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
let august = new TempApi.August(); // August | data to be created
apiInstance.createaugust(august, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **august** | [**August**](August.md)| data to be created | 

### Return type

[**August**](August.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteaugust

> deleteaugust(augustId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
let augustId = "augustId_example"; // String | the Id parameter
apiInstance.deleteaugust(augustId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **augustId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllaugust

> [August] getAllaugust()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
apiInstance.getAllaugust((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[August]**](August.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsaugust

> [August] getByParamsaugust(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsaugust(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[August]**](August.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getaugust

> August getaugust(augustId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
let augustId = "augustId_example"; // String | the Id parameter
apiInstance.getaugust(augustId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **augustId** | **String**| the Id parameter | 

### Return type

[**August**](August.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateaugust

> August updateaugust(augustId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AugustApi();
let augustId = "augustId_example"; // String | the Id parameter
let opts = {
  'august': new TempApi.August() // August | data to be updated
};
apiInstance.updateaugust(augustId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **augustId** | **String**| the Id parameter | 
 **august** | [**August**](August.md)| data to be updated | [optional] 

### Return type

[**August**](August.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

