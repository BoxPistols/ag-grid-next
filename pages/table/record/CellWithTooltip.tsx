import React from 'react'
import { Tooltip, Box } from '@mui/material'

const CellWithTooltip = (props: any) => {
  const { value } = props

  const defaultTooltipClasses = {
    tooltip: 'no-animation', // アニメーションを無効化するCSSクラスを追加
  }

  return (
    <Tooltip
      title={value}
      //   arrow
      //   disableInteractive
      enterDelay={1200}
      leaveDelay={0}
      enterTouchDelay={1200}
      classes={defaultTooltipClasses} // 追加したCSSクラスを適用
      PopperProps={{
        sx: {
          //   minWidth: 100,
          //   minHeight: 40,
          fontSize: 12,
          padding: '6px 12px',
          border: '1px solid #99999950',
          backgroundColor: '#21212160',
          color: 'white',
          transition: 'none !important',
          //   marginRight: "32px !important",
          //   transition: 0,
          //  "& .MuiTooltip-arrow": {
          // top: "-10px !important",
          //    "&::before": {
          //      backgroundColor: "gray",
          //    },
          //  },
        },
      }}
      components={{ Tooltip: Box }}
    >
      <div>{value}</div>
    </Tooltip>
  )
}

export default CellWithTooltip
