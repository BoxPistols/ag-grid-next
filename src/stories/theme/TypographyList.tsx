// src/stories/theme/TypographyList.tsx
import React from 'react'
import {
  Palette,
  PaletteColor,
  CommonColors,
  useTheme,
} from '@mui/material/styles'
import { Divider, Typography, Box, Grid, Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
const primaryOverride = blueGrey[900]

const sampleText = '日本語ひらがなカタカナ123abcABC@*^¥'

const TypographyList = () => {
  const theme = useTheme()

  const typographyVariantsHeading = [
    {
      variant: 'h1',
      note: '大見出し 主に開発ページ内の最初の左上に出す大見出し用途で「このページは何のページなのか」を明示する用途',
    },
    {
      variant: 'h2',
      note: '中見出し ページ名表記以降の、コンテンツ内セクションタイトル用など',
    },
    {
      variant: 'h3',
      note: '小見出し 構造としてh2配下の要素の中見出し、各ブロック（Boxやカードなど）の見出し、テーブルやフォームグループの見出しなど汎用的に利用される想定です。component="h3"などcomponent指定が無ければh3以降はdivとして書き出されます',
    },
    {
      variant: 'h4',
      note: '文章構造としてh3内の内側にある小見出し。h3同等の用途です',
    },
    {
      variant: 'h5',
      note: '文章構造としてh4内の内側にある小見出し。h4同等の用途。Typographyのcomponent指定をdivとしてUI用途としても考えられます',
    },
    {
      variant: 'h6',
      note: '文章構造としてh5内の内側にある最小の見出し。サイズ的には本文とあまり変わらず、UIとしては強調の役割。Typographyのcomponent指定をdivとしてUI用途としても考えられます。解像度が高く無いディスプレイの文字つぶれには留意が必要です',
    },
  ]

  const typographyVariants = [
    {
      variant: 'body1',
      note: 'デフォルトのフォントサイズとウェイトを踏襲。主に本文用。これで少し大きく感じる場合はbody2を使います',
    },
    {
      variant: 'body2',
      note: 'body1より一回りに小さく、この大きさでも視認性が担保が出来、データ表示などのコンパクトに多くの情報を表示する時などに使います',
    },
    {
      variant: 'subtitle1',
      note: '> こっちが本体です。主にH1の見出しに付随したサブタイトル用です',
    },
    {
      variant: 'subtitle2',
      note: '> こっちが本体です。主にH2以降の見出しに付随したサブタイトル用です',
    },
    {
      variant: 'caption',
      note: '最も小さなフォントで、注意、注釈表示や画像の説明文など、可視性よりも表面的に記述している事自体が重要な文言などに使います。小さなサブタイトル用途としても考えられます',
    },
    {
      variant: 'overline',
      note: '用途は確定していませんが、captionでは小さすぎた場合や、視認性もある程度必要な注釈ばど、汎用的に使う想定です',
    },
    {
      variant: 'button',
      note: 'ボタンのベースとなる表示用か、テキストだけど挙動がボタンの時など用でしょうか？ 用途はわかりませんが、使うのであればブロック化のPropsなど別途必要かもしれません',
    },
    {
      variant: 'inherit',
      note: 'inheritなのでデフォルト化のような挙動です。デフォルト本文フォントにフラットに合わせたい時に使えそうです',
    },
  ]

  // ----- Colors -----
  const colorGroups = Object.keys(theme.palette).filter(
    (key) =>
      typeof theme.palette[key as keyof Palette] === 'object' && key !== 'grey'
  )

  const getContrastTextColor = (color: PaletteColor | string): string => {
    if (typeof color === 'object' && 'main' in color) {
      return theme.palette.getContrastText(color.main)
    } else if (typeof color === 'string') {
      return theme.palette.getContrastText(color)
    } else {
      return theme.palette.text.primary
    }
  }
  // ______

  return (
    <>
      {/* Typography */}
      <div>
        {typographyVariantsHeading.map(({ variant, note }) => (
          <Box key={variant} sx={{ marginBottom: 2 }}>
            <Typography paragraph mb={0} color="grey.800">
              {variant}
            </Typography>
            <Typography variant={variant as any}>{sampleText}</Typography>
            <Typography variant="subtitle1" mb={0}>
              {note}
            </Typography>
          </Box>
        ))}
      </div>

      <Divider sx={{ my: 3 }} />
      <div>
        {typographyVariants.map(({ variant, note }) => (
          <Box key={variant} sx={{ marginBottom: 2 }}>
            <Typography paragraph mb={0} color="grey.800">
              {variant}
            </Typography>
            <Typography variant={variant as any}>{sampleText}</Typography>
            <Typography variant="subtitle2" mb={0}>
              {note}
            </Typography>
          </Box>
        ))}
      </div>

      <Divider sx={{ my: 3 }} />

      {/* Colors */}
      <div>
        {colorGroups.map((colorGroup) => (
          <div key={colorGroup}>
            <Typography variant="body1" mt={2}>
              {colorGroup}
              <Typography variant="caption">
                {colorGroup === 'action' &&
                  '可読性が無いので実カラー当てていません'}
              </Typography>
            </Typography>
            <Grid container spacing={2} gap={1}>
              {Object.keys(
                theme.palette[colorGroup as keyof Palette] as
                  | PaletteColor
                  | CommonColors
              ).map((shade: string) => {
                const color =
                  theme.palette[colorGroup as keyof Palette][
                    shade as keyof (PaletteColor | CommonColors)
                  ]
                return (
                  <Grid item key={shade}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2px 4px',
                        backgroundColor: getContrastTextColor(color),
                        ...(colorGroup === 'action' && {
                          backgroundColor: 'grey.400',
                          border: `1px solid ${primaryOverride}`,
                        }),
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontSize={14}
                        style={{
                          color: color,
                          ...(colorGroup === 'action' && { color: 'gray.600' }),
                        }}
                      >
                        {shade}: {color}
                      </Typography>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        ))}
      </div>
      <div>
        <Box my={2} display="flex" gap={2}>
          <Button variant="contained">検証用 contained</Button>
          <Button variant="outlined">検証用 outlined</Button>
          <Button variant="text">検証用 text</Button>
          <Button variant="contained" disabled>
            検証用 disable
          </Button>
        </Box>
      </div>
    </>
  )
}

export default TypographyList
