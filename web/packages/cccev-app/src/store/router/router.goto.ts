import { push } from "connected-react-router";
import { stringify } from "qs";


const pushUrl = (url: string) => push(url);

const certificateFiller = (params: Object) => push(`/${stringify(params, { addQueryPrefix: true, arrayFormat: 'repeat' })}`)

export const goto = {
  push: pushUrl,
  certificateFiller: certificateFiller
};
