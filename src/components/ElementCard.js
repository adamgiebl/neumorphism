import { Link, useNavigate } from '@remix-run/react'
import { arrowDiagonalRightUp, code as codeIcon, fork, globe, squares, warning } from '~/icons'
import { post_type } from '@prisma/client'
import MakeRecommended from '../forms/MakeRecommended'
import { ShadowDOMContent } from '../ShadowDOMContent'
import CardDropdown from '../dropdowns/DropdownCard'
import { CardIconBar } from './CardIconBar'
import SourceTooltip from '../Tooltips/SourceTooltip'

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

export const Card = props => {
  const {
    id,
    html,
    css,
    viewCount,
    theme,
    friendlyId,
    type,
    backgroundColor,
    user,
    className = '',
    _count
  } = props

  const navigate = useNavigate()

  return (
    <article
      className={`card flex flex-col text-black h-full card--${type} group ${
        theme === 'dark' && 'dark-background'
      } ${isFavorite && 'favorite'}`}
      onClick={onClick}
    >
      <div className={`card-content grow ${isCompact ? 'compact' : ''} ${className}`}>
        <Link to={link} className="font-sans font-semibold get-code bg-dark-400">
          {codeIcon('w-[20px] h-[20px]')} Get code
        </Link>
        {post_source && (
          <>
            <Link
              className="left-[12px] bottom-[12px] z-10 opacity-0 group-hover:opacity-100 transition-opacity absolute px-[8px] py-[4px] rounded-md bg-blue-700 hover:bg-blue-800 text-white"
              to={post_source.website}
              id={id + '-source'}
            >
              {arrowDiagonalRightUp('w-[20px] h-[20px] text-white')}
            </Link>
            <SourceTooltip id={id + '-source'} website={post_source.website} />
          </>
        )}
        {isAdmin && !review && isSignedIn && (
          <div className="absolute z-50 left-1.5 bottom-1.5 flex items-center gap-1">
            {socialMediaShare?.length > 0 && globe('w-5 h-5 text-purple-500')}
            <MakeRecommended isRecommended={isRecommended} postId={id} />
          </div>
        )}
        {isOwner && comment && review && (
          <div className="absolute m-[20px] w-[calc(100%_-_40px)] rounded-lg bottom-0 z-[2] shadow-xl bg-red-50 text-red-400 px-6 py-4">
            <div className="mb-1 text-sm text-dark-700">Feedback:</div>
            <span className="font-semibold">"{comment}"</span>
          </div>
        )}
        <CardDropdown
          {...props}
          username={user?.username}
          className={'top-1 right-1 absolute z-50 hidden group-hover:block'}
        />
        <CardIconBar
          originalPostId={originalPostId}
          _count={_count}
          backgroundColor={backgroundColor}
          theme={theme}
          post_ai_variation_query={post_ai_variation_query}
          isNotPublic={isNotPublic}
          isTailwind={isTailwind}
          postId={id}
        />
        {/*Checkbox cannot be checked inside of a real link*/}
        <div className="clickable-wrapper" onClick={() => navigate(link)}>
          <ShadowDOMContent
            css={css}
            html={html}
            backgroundColor={backgroundColor}
            isTailwind={isTailwind}
            onClickShadow={onClickShadow}
          />
          <Link to={link} className="fake-link">
            Link to post
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-1 card__views">
        {viewCount > 0 && <span>{formatter.format(viewCount)} views</span>}
      </div>
    </article>
  )
}
