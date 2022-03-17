import React, { memo } from 'react';
import twemoji from 'twemoji';

const Twemoji = ({ emoji }: Record<string, string> ) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
  />
)

export default memo(Twemoji)