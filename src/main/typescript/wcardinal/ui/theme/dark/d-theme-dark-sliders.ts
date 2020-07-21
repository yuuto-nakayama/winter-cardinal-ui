import { DBaseStateSet } from "../../d-base-state-set";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkSliders {
	protected static BACKGROUND_COLOR_ACTIVE = DThemeDarkConstants.HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.1 );
	protected static BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.2 );
	protected static BACKGROUND_COLOR = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_HOVERED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR, 0.1 );
	protected static BACKGROUND_COLOR_PRESSED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR, 0.2 );
	protected static BACKGROUND_COLOR_DISABLED = UtilRgb.blend( DThemeDarkSliders.BACKGROUND_COLOR,
		DThemeDarkConstants.BACKGROUND_COLOR, 0.5 );

	static getBackgroundColor( state: DBaseStateSet, isActive?: boolean ): number | null {
		if ( state.isActive || isActive ) {
			if ( state.inDisabled ) {
				return this.BACKGROUND_COLOR;
			} else if( state.isPressed && state.isHovered ) {
				return this.BACKGROUND_COLOR_ACTIVE_PRESSED;
			} else if( state.isPressed || state.isHovered ) {
				return this.BACKGROUND_COLOR_ACTIVE_HOVERED;
			} else {
				return this.BACKGROUND_COLOR_ACTIVE;
			}
		} else {
			if ( state.inDisabled ) {
				return this.BACKGROUND_COLOR_DISABLED;
			} else if( state.isPressed && state.isHovered ) {
				return this.BACKGROUND_COLOR_PRESSED;
			} else if( state.isPressed || state.isHovered ) {
				return this.BACKGROUND_COLOR_HOVERED;
			} else {
				return this.BACKGROUND_COLOR;
			}
		}
	}
}
