// src/stories/icons/IconList.tsx
import React, { Suspense } from 'react'
const IconListContent = React.lazy(() => import('./IconListContent'))

const IconList: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <IconListContent />
      </Suspense>
    </div>
  )
}

export default IconList
