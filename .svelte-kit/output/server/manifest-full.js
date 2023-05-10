export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/images/pfp.jpg","favicon.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.977e3c44.js","imports":["_app/immutable/entry/start.977e3c44.js","_app/immutable/chunks/index.4e18c1e1.js","_app/immutable/chunks/singletons.5f7f069a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a3663211.js","imports":["_app/immutable/entry/app.a3663211.js","_app/immutable/chunks/index.4e18c1e1.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/teaching",
				pattern: /^\/teaching\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
