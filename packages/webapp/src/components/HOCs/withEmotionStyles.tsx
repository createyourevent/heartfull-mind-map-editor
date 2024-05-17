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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ComponentType } from 'react';

function withEmotionStyles<T>(css) {
  return (Component: ComponentType<T>) => {
    const WithEmotionStyles = (hocProps): React.ReactElement => {
      return <Component {...hocProps} css={{ ...hocProps.papercss, ...css }} />;
    };
    WithEmotionStyles.displayName = `withEmotionStyles(${getDisplayName(Component)})`;
    return WithEmotionStyles;
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withEmotionStyles;
