---
nav:
    title: 组件
    path: /components
group:
    title: 基础
    path: /base
---

## Button 按钮
### 如何使用   
`import { Button } from 'emoui';`


### 基本用法

```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button>Button</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accent">Accent</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="glass">Glass</Button>
    </>
);
```
### 更多状态

```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
    </>
);
```
### 轮廓模式
> outline: boolean
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button type="info" outline>Info</Button>
        <Button type="success" outline>Success</Button>
        <Button type="warning"outline>Warning</Button>
        <Button type="error" outline>Error</Button>
    </>
);
```
### 尺寸
> size: 'lg' | 'sm' | 'xs'

```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Tiny</Button>
    </>
);
```
### 块级按钮
> block: boolean
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button block>Block</Button>
    </>
);
```
### 链接按钮
> link: string
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button link="https://www.google.cn">Block</Button>
    </>
);
```
### 其他形状按钮
> shape: 'cicle' | 'square'
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </Button>
        <Button shape="square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </Button>
    </>
);
```
### 禁用状态
> disabled: boolean
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button disabled>Block</Button>
    </>
);
```
### 加载状态
> loading: boolean
```tsx
import React from 'react';
import { Button } from 'emoui';

export default () => (
    <>
        <Button loading>Block</Button>
    </>
);
```
<API></API>


