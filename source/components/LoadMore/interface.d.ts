export interface IProps {
  defaultText?: string,
  endText?: string,
  errorText?: string,
  loadingText?: string,
  status?: 'default' | 'loading' | 'error' | 'end',
  style?: string | React.CSSProperties,
  className?: string,
  onLoadMore?: () => void
}

export interface IState {

}
