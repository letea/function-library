# Functions

[![npm version](https://badge.fury.io/js/%40letea%2Ffunctions.svg)](https://badge.fury.io/js/%40letea%2Ffunctions)

A function library.

## Install

```bash
npm install @letea/functions
```

## Contents

### [Array](#array-1)

* [checkIsArray](#checkisarray)
* [checkIsArrayEmpty](#checkisarrayempty)
* [getDuplicateValuesFromArray](#getduplicatevaluesfromarray)
* [getIntersectionArray](#getintersectionarray)
* [getNextIndexInArray](#getnextindexinarray)
* [getRandomIndexInArray](#getrandomindexinarray)
* [getRandomValueInArray](#getrandomvalueinarray)
* [getReverseArray](#getreversearray)
* [getShuffleArray](#getshufflearray)
* [getSortedArray](#getsortedarray)
* [getTrulyArray](#gettrulyarray)
* [getUniqueArray](#getuniquearray)
* [getUniqueValuesFromArray](#getuniquevaluesfromarray)

### [Browser](#browser-1)

* [checkIsBrowser](#checkisbrowser)
* [checkIsInAppBrowserByFacebookNotLoaded](#checkisinappbrowserbyfacebooknotloaded)

### [Canvas](#canvas-1)

* [checkIsCanvasSupported](#checkiscanvassupported)

### [Function](#function-1)

* [checkIsFunction](#checkisfunction)

### [LocalStorage](#localstorage-1)

* [checkIsLocalStorageSupported](#checkislocalstoragesupported)

### [Number](#number-1)

* [checkIsInteger](#checkisinteger)
* [checkIsNumber](#checkisnumber)
* [getRandomNumber](#getrandomnumber)

### [Object](#object-1)

* [checkIsObject](#checkisobject)
* [checkIsObjectEmpty](#checkisobjectempty)
* [getObjectValue](#getobjectvalue)

### [String](#string-1)

* [checkIsEmailValid](#checkisemailvalid)
* [checkIsMobileNumberValid](#checkismobilenumbervalid)
* [checkIsString](#checkisstring)
* [getRandomString](#getrandomstring)
* [getSimpleChinese](#getsimplechinese)
* [getStringify](#getstringify)
* [getTraditionalChinese](#gettraditionalchinese)

### [Time](#time-1)

* [getHoursFromMinutes](#gethoursfromminutes)
* [getHoursFromSeconds](#gethoursfromseconds)
* [getMillisecondsFromSeconds](#getmillisecondsfromseconds)
* [getMinutesFromHours](#getminutesfromhours)
* [getMinutesFromSeconds](#getminutesfromseconds)
* [getSecondsFromHours](#getsecondsfromhours)
* [getSecondsFromMilliseconds](#getsecondsfrommilliseconds)
* [getSecondsFromMinutes](#getsecondsfromminutes)

### [URL](#url-1)

* [checkIsAbsoluteURL](#checkisabsoluteurl)
* [getCurrentURL](#getcurrenturl)
* [getDropboxRawFileURL](#getdropboxrawfileurl)
* [getParametersFromURL](#getparametersfromurl)
* [getSearchFromParameters](#getsearchfromparameters)
* [getShareToFacebookLink](#getsharetofacebooklink)
* [getShareToLineLink](#getsharetolinelink)
* [getURLWithoutParameters](#geturlwithoutparameters)
* [getURLWithoutTrackingParameters](#geturlwithouttrackingparameters)

### [User-Agent](#user-agent-1)

* [checkIsAndroid](#checkisandroid)
* [checkIsChrome](#checkischrome)
* [checkIsDesktop](#checkisdesktop)
* [checkIsEdge](#checkisedge)
* [checkIsFirefox](#checkisfirefox)
* [checkIsInAppBrowserByFacebook](#checkisinappbrowserbyfacebook)
* [checkIsInAppBrowserByLine](#checkisinappbrowserbyline)
* [checkIsInternetExplorer](#checkisinternetexplorer)
* [checkIsiOS](#checkisios)
* [checkIsiPad](#checkisipad)
* [checkIsiPhone](#checkisiphone)
* [checkIsMac](#checkismac)
* [checkIsMobile](#checkismobile)
* [checkIsSafari](#checkissafari)
* [checkIsSamsungBrowser](#checkissamsungbrowser)
* [checkIsWindows](#checkiswindows)
* [getAndroidVersion](#getandroidversion)
* [getiOSVersion](#getiosversion)

### [Video](#video-1)

* [getVideoType](#getvideotype)

### [Window](#window-1)

* [checkIsClipboardSupported](#checkisclipboardsupported)
* [checkIsFullscreen](#checkisfullscreen)
* [checkIsWindowFocused](#checkiswindowfocused)
* [checkIsWindowLoaded](#checkiswindowloaded)

# Array

## checkIsArray

Check data type is an array or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsArray from "@letea/function/checkIsArray";

checkIsArray([1, 2, 3]);
// true

checkIsArray("abc");
// false

```

## checkIsArrayEmpty

Check the array is empty or not.

### arguments

```js
array = []; // required

```

### usage

```js
import checkIsArrayEmpty from "@letea/function/checkIsArrayEmpty";

checkIsArrayEmpty([]);
// true

checkIsArrayEmpty([1, 2, 3]);
// false

```

## getDuplicateValuesFromArray

Get an array with duplicate values from the original array.

### arguments

```js
array = []; // required

```

### usage

```js
import getDuplicateValuesFromArray from "@letea/function/getDuplicateValuesFromArray";

const array = [1, 2, 3, 2, 3, 4, 5];

getDuplicateValuesFromArray(array);
// [2, 3]

```

## getIntersectionArray

Get an intersection array.

### arguments

```js
arguments = {
  array1: [], // required
  array2: [], // required
};

```

### usage

```js
import getIntersectionArray from "@letea/function/getIntersectionArray";

getIntersectionArray({
  array1: ["a", "b", "c"],
  array2: ["b", "c", "d", "e", "f"],
});
// ["b", "c"]

```

### references

* [一些JS 數組精簡技巧，要記好筆記了](https://segmentfault.com/a/1190000021840363)

## getNextIndexInArray

Set an array and index to get the next index. Using isLoop to get the first index if the index of input is the last one.

### arguments

```js
arguments = {
  array: [], // required
  index: 0, // optional
  isLoop: false, // optional
};

```

### usage

```js
import getNextIndexInArray from "@letea/function/getNextIndexInArray";

const array = ["a", "b", "c", "d", "e"];

getNextIndexInArray({
  array,
  index: 2,
});
// 3

getNextIndexInArray({
  array,
  index: 4,
});
// -1

getNextIndexInArray({
  array,
  index: 4,
  isLoop: true,
});
// 0

```

## getRandomIndexInArray

Get a random index from the array.

### arguments

```js
array = []; // required

```

### usage

```js
import getRandomIndexInArray from "@letea/function/getRandomIndexInArray";

const array = ["a", "b", "c", "d", "e"];

getRandomIndexInArray(array);

```

## getRandomValueInArray

Get a random value from the array.

### arguments

```js
array = []; // required

```

### usage

```js
import getRandomValueInArray from "@letea/function/getRandomValueInArray";

const array = [1, 2, 3, 4, 5];

getRandomValueInArray(array);

```

## getReverseArray

Get an array with reversed.

### arguments

```js
array = []; // required

```

### usage

```js
import getReverseArray from "@letea/function/getReverseArray";

const array = [1, 2, 3, 4, 5];

getReverseArray(array);
// [5, 4, 3, 2 ,1]

```

## getShuffleArray

Get an array with shuffled.

### arguments

```js
array = []; // required

```

### usage

```js
import getShuffleArray from "@letea/function/getShuffleArray";

const array = [1, 2, 3, 4, 5];

getShuffleArray(array);
// [5, 3, 2, 1, 4]...

```

## getSortedArray

Get a sorted array.

### arguments

```js
array = []; // required

```

### usage

```js
import getSortedArray from "@letea/function/getSortedArray";

const array = [5, 3, 2, 1, 4];

getSortedArray(array);
// [1, 2, 3, 4, 5]

```

## getTrulyArray

Get an array with true values.

### arguments

```js
array = []; // required

```

### usage

```js
import getTrulyArray from "@letea/function/getTrulyArray";

const array = [0, "test", "", NaN, 9, true, undefined, false, Infinity, {}, []];

getTrulyArray(array);
// ["test", 9, true, Infinity, {}, []]

```

### notes

* Infinity is a true value.

### references

* [一些JS 數組精簡技巧，要記好筆記了](https://segmentfault.com/a/1190000021840363)

## getUniqueArray

Get a unique array.

### arguments

```js
array = []; // required

```

### usage

```js
import getUniqueArray from "@letea/function/getUniqueArray";

getUniqueArray([1, 2, 3, "a", "b", 2, "c", "a"]);
// [1, 2, 3, "a", "b", "c"]

```

### references

* [uniqueElements - 30 seconds of code](https://www.30secondsofcode.org/js/s/unique-elements/)

## getUniqueValuesFromArray

Get an array with unique values from the original array.

### arguments

```js
array = []; // required

```

### usage

```js
import getUniqueValuesFromArray from "@letea/function/getUniqueValuesFromArray";

const array = [1, 2, 3, 2, 3, 4, 5];

getUniqueValuesFromArray(array);
// [1, 4, 5]

```

# Browser

## checkIsBrowser

Check an environment is a browser or not by window and document.

### usage

```js
import checkIsBrowser from "@letea/function/checkIsBrowser";

// Browser
checkIsBrowser();
// true

// Node.js
checkIsBrowser();
// false

```

### references

* [isBrowser - 30 seconds of code](https://www.30secondsofcode.org/js/s/is-browser)

## checkIsInAppBrowserByFacebookNotLoaded

Facebook's InAppBrowser has a bug: window size is not correct before the window loaded. So we need to check is loaded or not.

### usage

```js
import checkIsInAppBrowserByFacebookNotLoaded from "@letea/function/checkIsInAppBrowserByFacebookNotLoaded";

checkIsInAppBrowserByFacebookNotLoaded();
// true

```

### notes

* Only work on browsers.

# Canvas

## checkIsCanvasSupported

Check the browser is supports canvas or not.

### usage

```js
import checkIsCanvasSupported from "@letea/function/checkIsCanvasSupported";

checkIsCanvasSupported();
// true

```

### notes

* Only work on browsers.

# Function

## checkIsFunction

Check data type is function or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsFunction from "@letea/function/checkIsFunction";

checkIsFunction(() => {});
// true

checkIsFunction(function () {});
// true

checkIsFunction("function");
// false

```

# LocalStorage

## checkIsLocalStorageSupported

Check the browser is supports local storage or not.

### usage

```js
import checkIsLocalStorageSupported from "@letea/function/checkIsLocalStorageSupported";

checkIsLocalStorageSupported();
// true

```

### notes

* Only work on browsers.

# Number

## checkIsInteger

Check the number is an integer or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsInteger from "@letea/function/checkIsInteger";

checkIsInteger(1);
// true

checkIsInteger(1.5);
// false

```

## checkIsNumber

Check data type is number or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsNumber from "@letea/function/checkIsNumber";

checkIsNumber(123);
// true;

checkIsNumber("abc");
// false

checkIsNumber(NaN);
// false

checkIsNumber(Infinity);
// false

```

## getRandomNumber

Get a random number.

### arguments

```js
arguments = {
  maxNumber: 0, // required, it should be greater than minNumber.
  minNumber: 0, // optional.
  isFloat: false, // optional, if is true, it will return a float number.
};

```

### usage

```js
import getRandomNumber from "@letea/function/getRandomNumber";

getRandomNumber({
  maxNumber: 10,
});
// 6

getRandomNumber({
  maxNumber: 10,
  minNumber: 0,
  isFloat: true,
});
// 3.5476

```

# Object

## checkIsObject

Check data type is an object or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsObject from "@letea/function/checkIsObject";

checkIsObject({ a: 123 });
// true;

checkIsObject([1, 2, 3]);
// false

checkIsObject("abc");
// false

```

## checkIsObjectEmpty

Check the object is empty or not.

### arguments

```js
object = {}; // required

```

### usage

```js
import checkIsObjectEmpty from "@letea/function/checkIsObjectEmpty";

checkIsObjectEmpty({});
// true

checkIsObjectEmpty({ a: 1 });
// false

```

## getObjectValue

Get the value from an object, including multiple levels.

### arguments

```js
arguments = {
  object: {}, // required
  keys: "", // required
};

```

### usage

```js
import getObjectValue from "@letea/function/getObjectValue";

const example = {
  a: 1,
  b: {
    c: 2,
    d: [3, { e: 4 }],
  },
};

getObjectValue({
  object: example,
  keys: "a",
});
// 1

getObjectValue({
  object: example,
  keys: "b.c",
});
// 2

getObjectValue({
  object: example,
  keys: "b.d[0]",
});
// 3

getObjectValue({
  object: example,
  keys: "b.d[1].e",
});
// 4

getObjectValue({
  object: example,
  keys: "b.d[1].e.f",
});
// undefined

```

# String

## checkIsEmailValid

Check email format is valid or not.

### arguments

```js
email = ""; // required

```

### usage

```js
import checkIsEmailValid from "@letea/function/checkIsEmailValid";

checkIsEmailValid("geon@ihateregex.io");
checkIsEmailValid("test@gmail.com");
checkIsEmailValid("mail@test.org");
checkIsEmailValid("mail@testing.com");
// true

checkIsEmailValid();
checkIsEmailValid("hello@");
checkIsEmailValid("@test");
checkIsEmailValid("email@gmail");
checkIsEmailValid("theproblem@");
// false

```

### references

* [Regex Rule](https://ihateregex.io/expr/email-2)

## checkIsMobileNumberValid

Check mobile number format is valid or not.

### arguments

```js
mobileNumber = ""; // required

```

### usage

```js
import checkIsMobileNumberValid from "@letea/function/checkIsMobileNumberValid";

checkIsMobileNumberValid("0912345678");
checkIsMobileNumberValid("0912-345-678");
checkIsMobileNumberValid("+8860912345678");
checkIsMobileNumberValid("+886912345678");
checkIsMobileNumberValid("+886912-345-678");
// true

checkIsMobileNumberValid();
checkIsMobileNumberValid("09");
checkIsMobileNumberValid("091234567");
checkIsMobileNumberValid("0912-345");
checkIsMobileNumberValid("09123-45-678");
checkIsMobileNumberValid("0912345-678");
checkIsMobileNumberValid("0912-345678");
checkIsMobileNumberValid("+88609");
checkIsMobileNumberValid("+886091234567");
checkIsMobileNumberValid("+8860912-34567");
// false

```

## checkIsString

Check data type is a string or not.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import checkIsString from "@letea/function/checkIsString";

checkIsString("abc");
// true

checkIsString(123);
// false

checkIsString({ a: 1 });
// false

```

## getRandomString

Get a random string.

### arguments

```js
length = 3; // optional

```

### usage

```js
import getRandomString from "@letea/function/getRandomString";

getRandomString();
// "ZI4"

getRandomString(5);
// "j0C4N"

```

## getSimpleChinese

Transform Traditional Chinese into Simple Chinese.

### arguments

```js
value = ""; // required

```

### usage

```js
import getSimpleChinese from "@letea/function/getSimpleChinese";

getSimpleChinese("繁體字、簡體字");
// "繁体字、简体字"

```

### references

* [繁簡轉換](https://github.com/mollykannn/translate-big5-gbk.git)

## getStringify

Transform any data into a string.

### arguments

```js
value; // required, any type is accepted.

```

### usage

```js
import getStringify from "@letea/function/getStringify";

getStringify(123);
// "123"

getStringify({ a: 123, b: undefined, c: Infinity, d: NaN });
// "{a:123, b:undefined, c:Infinity, d:NaN}"

getStringify([123, 234, undefined, Infinity, NaN]);
// "[123, 234, undefined, Infinity, NaN]"

```

## getTraditionalChinese

Transform Simple Chinese into Traditional Chinese.

### arguments

```js
value = ""; // required

```

### usage

```js
import getTraditionalChinese from "@letea/function/getTraditionalChinese";

getTraditionalChinese("繁体字、简体字");
// "繁體字、簡體字"

```

### references

* [繁簡轉換](https://github.com/mollykannn/translate-big5-gbk.git)

# Time

## getHoursFromMinutes

Minutes to hours.

### arguments

```js
minutes = 0; // required

```

### usage

```js
import getHoursFromMinutes from "@letea/function/getHoursFromMinutes";

getHoursFromMinutes(60);
// 1

```

## getHoursFromSeconds

Seconds to hours.

### arguments

```js
seconds = 0; // required

```

### usage

```js
import getHoursFromSeconds from "@letea/function/getHoursFromSeconds";

getHoursFromSeconds(3600);
// 1

```

## getMillisecondsFromSeconds

Seconds to milliseconds

### arguments

```js
seconds = 0; // required

```

### usage

```js
import getMillisecondsFromSeconds from "@letea/function/getMillisecondsFromSeconds";

getMillisecondsFromSeconds(1);
// 1000

```

## getMinutesFromHours

Hours to minutes.

### arguments

```js
hours = 0; // required

```

### usage

```js
import getMinutesFromHours from "@letea/function/getMinutesFromHours";

getMinutesFromHours(1);
// 60

```

## getMinutesFromSeconds

Seconds to minutes.

### arguments

```js
seconds = 0; // required

```

### usage

```js
import getMinutesFromSeconds from "@letea/function/getMinutesFromSeconds";

getMinutesFromSeconds(60);
// 1

```

## getSecondsFromHours

Hours to seconds.

### arguments

```js
hours = 0; // required

```

### usage

```js
import getSecondsFromHours from "@letea/function/getSecondsFromHours";

getSecondsFromHours(1);
// 3600

```

## getSecondsFromMilliseconds

Milliseconds to seconds.

### arguments

```js
milliseconds = 0; // required

```

### usage

```js
import getSecondsFromMilliseconds from "@letea/function/getSecondsFromMilliseconds";

getSecondsFromMilliseconds(1000);
// 1

```

## getSecondsFromMinutes

Minutes to Seconds.

### arguments

```js
minutes = 0; // required

```

### usage

```js
import getSecondsFromMinutes from "@letea/function/getSecondsFromMinutes";

getSecondsFromMinutes(1);
// 60

```

# URL

## checkIsAbsoluteURL

Check the URL is absolute or not.

### arguments

```js
url = ""; // required

```

### usage

```js
import checkIsAbsoluteURL from "@letea/function/checkIsAbsoluteURL";

checkIsAbsoluteURL("https://google.com");
// true

checkIsAbsoluteURL("ftp://www.myserver.net");
// true

checkIsAbsoluteURL("/foo/bar");
// false

```

### references

* [isAbsoluteURL - 30 seconds of code](https://www.30secondsofcode.org/js/s/is-absolute-url/)

## getCurrentURL

Get current site's URL. For now can get URL without search or trim tracking parameters(Google & Facebook).

### arguments

```js
arguments = {
  hasSearch: true, // optional.
  trimTracking: false, // optional, if hasSearch is true then trimTracking will do nothing.
};

```

### usage

```js
import getCurrentURL from "@letea/function/getCurrentURL";

// if window.location.href is "https://google.com/tw/?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
getCurrentURL();
// "https://google.com/tw/?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"

getCurrentURL({
  hasSearch: false,
});
// "https://google.com/tw/"

getCurrentURL({
  trimTracking: true,
});
// https://google.com/tw/?a=%E5%80%BC

```

### notes

* Only work on browsers.

## getDropboxRawFileURL

Get a file URL that can be linked from Dropbox directly.

### arguments

```js
filePath = ""; // required, the format is "id/filename"

```

### usage

```js
import getDropboxRawFileURL from "@letea/function/getDropboxRawFileURL";

getDropboxRawFileURL("0xp0v2cm3asbk0h/sample.jpg");
// https://www.dropbox.com/s/0xp0v2cm3asbk0h/sample.jpg?raw=1

```

### references

* [How to Force a Shared Link to Download or Render - Dropbox](https://help.dropbox.com/files-folders/share/force-download)

## getParametersFromURL

Transform URL's search into an object.

### arguments

```js
url = ""; // required

```

### usage

```js
import getParametersFromURL from "@letea/function/getParametersFromURL";

getParametersFromURL("http://example.com/?a=1");
// { a: 1 }

getParametersFromURL("http://example.com/?a=1&b=2&c=3");
// { a: 1, b: 2, c: 3 }

getParametersFromURL("?a=1");
// { a: 1 }

getParametersFromURL("?a=1&b=2&c=3");
// { a: 1, b: 2, c: 3 }

getParametersFromURL("?a=%E5%80%BC");
// { a: "值" }

getParametersFromURL("http://example.com/");
// {}

```

## getSearchFromParameters

Transform an object into a search for a URL.

### arguments

```js
parameters = {}; // required

```

### usage

```js
import getSearchFromParameters from "@letea/function/getSearchFromParameters";

getSearchFromParameters({ a: 1 });
// "?a=1"

getSearchFromParameters({ a: 1, b: 2, c: 3 });
// "?a=1&b=2&c=3"

getSearchFromParameters({ a: 1 });
// "?a=1"

getSearchFromParameters({ a: 1, b: 2, c: 3 });
// "?a=1&b=2&c=3"

getSearchFromParameters({ a: "值" });
// "?a=%E5%80%BC"

getSearchFromParameters({});
// ""

```

## getShareToFacebookLink

Get a link that can direct to the Facebook Share Page.

### arguments

```js
url = ""; // optional, if empty, it's will using location.href.

```

### usage

```js
import getShareToFacebookLink from "@letea/function/getShareToFacebookLink";

getShareToFacebookLink();
// "https://www.facebook.com/sharer/sharer.php?u={location.href}"

getShareToFacebookLink("https://google.com");
// "https://www.facebook.com/sharer/sharer.php?u=https://google.com"

```

### notes

* Only work on browsers.

### references

* [Facebook](https://www.facebook.com/sharer/sharer.php)

## getShareToLineLink

Get a link that can direct to the Line Share Page.

### arguments

```js
arguments = {
  url: "", // optional, if empty, it's will using location.href.
  message: "", // optional
};

```

### usage

```js
import getShareToLineLink from "@letea/function/getShareToLineLink";

getShareToLineLink();
// "http://line.naver.jp/R/msg/text/?%0D%0A{location.href}"

getShareToLineLink({ url: "https://google.com", message: "OK Google" });
// "http://line.naver.jp/R/msg/text/?OK%20Google%0D%0Ahttps://google.com"

```

### notes

* Only work on browsers.

### references

* [Line Social Plugins](https://media.line.me/zh_TW/how_to_install#lineitbutton)

## getURLWithoutParameters

Trim URL's search.

### arguments

```js
url = ""; // required

```

### usage

```js
import getURLWithoutParameters from "@letea/function/getURLWithoutParameters";

getURLWithoutParameters("http://example.com/?a=1");
// http://example.com/

getURLWithoutParameters("http://example.com/?a=1&b=2&c=3");
// http://example.com/

getURLWithoutParameters("http://example.com/?a=%E5%80%BC");
// http://example.com/

getURLWithoutParameters("http://example.com/");
// http://example.com/

```

## getURLWithoutTrackingParameters

To filter URL's search(Tracking Parameters), including Google, Facebook for now.

### arguments

```js
url = ""; // required

```

### usage

```js
import getURLWithoutTrackingParameters from "@letea/function/getURLWithoutTrackingParameters";

getURLWithoutTrackingParameters(
  "http://google.com/?utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value"
);
// "http://google.com/"

getURLWithoutTrackingParameters(
  "http://facebook.com/?ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
);
// "http://facebook.com/"

getURLWithoutTrackingParameters(
  "http://google.com/?a=123&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value"
);
// "http://google.com/?a=123"

```

### references

* [Google: Campaign URL Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/)
* [Facebook Business: 關於網址參數](https://www.facebook.com/business/help/1016122818401732)

# User-Agent

## checkIsAndroid

Check is Android by the window\.navigator.userAgent

### usage

```js
import checkIsAndroid from "@letea/function/checkIsAndroid";

// Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
checkIsAndroid();
// true

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
checkIsAndroid();
// false

```

### notes

* Only work on browsers.

## checkIsChrome

Check is Chrome by the window\.navigator.userAgent.

### usage

```js
import checkIsChrome from "@letea/function/checkIsChrome";

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
checkIsChrome();
// true

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0
checkIsChrome();
// false

```

### notes

* Only work on browsers.

## checkIsDesktop

Check is Desktop Device by the window\.navigator.userAgent.

### usage

```js
import checkIsDesktop from "@letea/function/checkIsDesktop";

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
checkIsDesktop();
// true

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
checkIsDesktop();
// true

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
checkIsDesktop();
// false

```

### notes

* Only work on browsers.

## checkIsEdge

Check is Edge by the window\.navigator.userAgent.

### usage

```js
import checkIsEdge from "@letea/function/checkIsEdge";

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 EdgiOS/44.11.15 Mobile/15E148 Safari/605.1.15
checkIsEdge();
// true

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0
checkIsEdge();
// false

```

### notes

* Only work on browsers.

## checkIsFirefox

Check is Firefox by the window\.navigator.userAgent.

### usage

```js
import checkIsFirefox from "@letea/function/checkIsFirefox";

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0
checkIsFirefox();
// true

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 EdgiOS/44.11.15 Mobile/15E148 Safari/605.1.15
checkIsFirefox();
// false

```

### notes

* Only work on browsers.

## checkIsInAppBrowserByFacebook

Check is InAppBrowser by Facebook using window\.navigator.userAgent.

### usage

```js
import checkIsInAppBrowserByFacebook from "@letea/function/checkIsInAppBrowserByFacebook";

// Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.136 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/255.0.0.33.121;]
checkIsInAppBrowserByFacebook();
// true

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/10.0.2
checkIsInAppBrowserByFacebook();
// false

```

### notes

* Only work on browsers.

## checkIsInAppBrowserByLine

Check is InAppBrowser by Line using window\.navigator.userAgent.

### usage

```js
import checkIsInAppBrowserByLine from "@letea/function/checkIsInAppBrowserByLine";

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/10.0.2
checkIsInAppBrowserByLine();
// true

// Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.136 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/255.0.0.33.121;]
checkIsInAppBrowserByLine();
// false

```

### notes

* Only work on browsers.

## checkIsInternetExplorer

Check is Internet Explorer by the window\.navigator.userAgent

### usage

```js
import checkIsInternetExplorer from "@letea/function/checkIsInternetExplorer";

// Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
checkIsInternetExplorer();
// true

// Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
checkIsInternetExplorer();
// true

// Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
checkIsInternetExplorer();
// true

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
checkIsInternetExplorer();
// false

```

### notes

* Only work on browsers.

## checkIsiOS

Check is iOS by the window\.navigator.userAgent.

### usage

```js
import checkIsiOS from "@letea/function/checkIsiOS";

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
checkIsiOS();
// true

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
checkIsiOS();
// true

// Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
checkIsiOS();
// false

```

### notes

* Only work on browsers.

## checkIsiPad

Check is iPad by the window\.navigator.userAgent.

### usage

```js
import checkIsiPad from "@letea/function/checkIsiPad";

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
checkIsiPad();
// true

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
checkIsiPad();
// false

```

### notes

* Only work on browsers.

## checkIsiPhone

Check is iPhone by the window\.navigator.userAgent.

### usage

```js
import checkIsiPhone from "@letea/function/checkIsiPhone";

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
checkIsiPhone();
// true

// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
checkIsiPhone();
// false

```

### notes

* Only work on browsers.

## checkIsMac

Check is macOS by the window\.navigator.userAgent.

### usage

```js
import checkIsMac from "@letea/function/checkIsMac";

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15
checkIsMac();
// true

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
checkIsMac();
// false

```

### notes

* Only work on browsers.

## checkIsMobile

Check is Mobile Device by the window\.navigator.userAgent.

### usage

```js
import checkIsMobile from "@letea/function/checkIsMobile";

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
checkIsMobile();
// true

// Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
checkIsMobile();
// true

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
checkIsMobile();
// false

```

### notes

* Only work on browsers.

## checkIsSafari

Check is Safari by the window\.navigator.userAgent.

### usage

```js
import checkIsSafari from "@letea/function/checkIsSafari";

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15
checkIsSafari();
// true

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
checkIsSafari();
// false

```

### notes

* Only work on browsers.

## checkIsSamsungBrowser

Check is Samsung Browser by the window\.navigator.userAgent.

### usage

```js
import checkIsSamsungBrowser from "@letea/function/checkIsSamsungBrowser";

// Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N9750) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.2 Chrome/71.0.3578.99 Mobile Safari/537.36
checkIsSamsugnBrowser();
// true

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
checkIsSamsugnBrowser();
// false

```

### notes

* Only work on browsers.

## checkIsWindows

Check is Windows by the window\.navigator.userAgent.

### usage

```js
import checkIsWindows from "@letea/function/checkIsWindows";

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
checkIsWindows();
// true

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15
checkIsWindows();
// false

```

### notes

* Only work on browsers.

## getAndroidVersion

Get Android Version from the window\.navigator.userAgent. If the userAgent is not iOS or not found, it will return "".

### usage

```js
import getAndroidVersion from "@letea/function/getAndroidVersion";

// User-Agent: Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
getAndroidVersion();
// "8.0.0"

// User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
getAndroidVersion();
// ""

```

### notes

* Only work on browsers.

## getiOSVersion

Get iOS Version from window\.navigator.userAgent. If the userAgent is not iOS or not found, it will return "".

### usage

```js
import getiOSVersion from "@letea/function/getiOSVersion";

// User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
getiOSVersion();
// "13.3"

// User-Agent: Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
getiOSVersion();
// ""

```

### notes

* Only work on browsers.

# Video

## getVideoType

Get video type for video & source tag.

### arguments

```js
src = ""; // required

```

### usage

```js
import getVideoType from "@letea/function/getVideoType";

getVideoType("https://example.com/file/video.mp4");
// "video/mp4"

```

# Window

## checkIsClipboardSupported

Check the browser is supports the clipboard or not.

### usage

```js
import checkIsClipboardSupported from "@letea/function/checkIsClipboardSupported";

// When Browser support clipboard
checkIsClipboardSupported();
// true

// When Browser is not support clipboard
checkIsClipboardSupported();
// false

```

### notes

* Only work on browsers.

### references

* [clipboard.js](https://clipboardjs.com/)

## checkIsFullscreen

Check the browser is fullscreen or not.

### usage

```js
import checkIsFullscreen from "@letea/function/checkIsFullscreen";

// When Fullscreen
checkIsFullscreen();
// true

// When Normal
checkIsFullscreen();
// false

```

### notes

* Only work on browsers.

## checkIsWindowFocused

Check Window is focused or not.

### usage

```js
import checkIsWindowFocused from "@letea/function/checkIsWindowFocused";

checkIsWindowFocused();
// true (when window has focus actually.)

```

### notes

* Only work on browsers.

### references

* [Document.hasFocus() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus)

## checkIsWindowLoaded

Check Window is loaded or not.

### usage

```js
import checkIsWindowLoaded from "@letea/function/checkIsWindowLoaded";

checkIsWindowLoaded();
// true

```

### notes

* Only work on browsers.
