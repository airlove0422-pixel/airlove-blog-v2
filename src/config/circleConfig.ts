export interface CircleConfig {
	dataUrl: string;
	pageSize: number;
	showStats: boolean;
	showFloor: boolean;
	cacheTime: number;
}

export const circleConfig: CircleConfig = {
	dataUrl: "",
	pageSize: 20,
	showStats: false,
	showFloor: false,
	cacheTime: 5 * 60 * 1000,
};
