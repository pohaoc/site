export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/images/pfp.jpg","favicon.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.977e3c44.js","imports":["_app/immutable/entry/start.977e3c44.js","_app/immutable/chunks/index.4e18c1e1.js","_app/immutable/chunks/singletons.5f7f069a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a3663211.js","imports":["_app/immutable/entry/app.a3663211.js","_app/immutable/chunks/index.4e18c1e1.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
