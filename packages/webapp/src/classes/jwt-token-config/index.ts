/*
 *    Copyright [2021] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import Cookies from 'universal-cookie';

class JwtTokenConfig {
  private static COOKIE_NAME = 'jwt-auth-token';

  static storeToken(token: string): void {
    // @todo: Hack. Can not call AppConfig due to an error. Temporally, harcoding value to 1 week.
    const expMs = 100000 * 10080;

    const cookies = new Cookies();
    cookies.set(JwtTokenConfig.COOKIE_NAME, token, { path: '/', maxAge: expMs });
  }

  static retreiveToken(): string | undefined {
    const cookies = new Cookies();
    return cookies.get(JwtTokenConfig.COOKIE_NAME);
  }

  static removeToken(): void {
    // Set jwt token on cookie ...
    const cookies = new Cookies();
    cookies.remove(JwtTokenConfig.COOKIE_NAME, { path: '/' });
  }
}

export default JwtTokenConfig;
