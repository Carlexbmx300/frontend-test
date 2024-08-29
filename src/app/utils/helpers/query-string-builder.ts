

  export function QueryStringBuilder(params: { [key: string]: string }, newParam: { key: string, value: string }): string {
        if (params.hasOwnProperty(newParam.key)) {
          params[newParam.key] = newParam.value;
        } else {
          params[newParam.key] = newParam.value;
        }
        return Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join('&');
      }
