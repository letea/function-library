// local files
import checkIsString from "../checkIsString/index.js";
import checkIsObjectEmpty from "../checkIsObjectEmpty/index.js";
import getURLWithoutParameters from "../getURLWithoutParameters/index.js";
import getParametersFromURL from "../getParametersFromURL/index.js";
import getSearchFromParameters from "../getSearchFromParameters/index.js";

const trackingKeys = [
  // Google
  "gclid",
  "utm_campaign",
  "utm_content",
  "utm_medium",
  "utm_source",
  "utm_term",
  // Facebook
  "ad_id",
  "ad_name",
  "adset_id",
  "adset_name",
  "campaign_id",
  "campaign_name",
  "fbclid",
  "placement",
  "site_source_name"
];

const getURLWithoutTrackingParameters = (url = "") => {
  if (!checkIsString(url)) {
    throw new Error("The parameter is not string.");
  }

  if (url.indexOf("?") === -1) {
    return url;
  }

  const urlWithoutParameters = getURLWithoutParameters(url);
  const parameters = getParametersFromURL(url);

  Object.keys(parameters).forEach((key) => {
    if (trackingKeys.includes(key)) {
      delete parameters[key];
    }
  });

  if (checkIsObjectEmpty(parameters)) {
    return urlWithoutParameters;
  }

  const search = getSearchFromParameters(parameters);

  return `${urlWithoutParameters}${search}`;
};

export default getURLWithoutTrackingParameters;
