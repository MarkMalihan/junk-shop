export default function AppLoadingScreen() {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-black">
			<div className="relative h-32 w-32 animate-note-reset">
				<div className="app-loading-loader" />
			</div>

			<style>
				{`
.app-loading-loader {
  width: 60px;
  aspect-ratio: 1;
  color: var(--color-primary-500);
  background:
    linear-gradient(var(--color-primary-100) 0 0) 100%  0,
    linear-gradient(var(--color-primary-100) 0 0) 0  100%;
  background-size: 50.1% 50.1%;
  background-repeat: no-repeat;
  animation: app-loading-l7-0 1s infinite steps(1);
}
.app-loading-loader::before,
.app-loading-loader::after {
  content: "";
  position: absolute;
  inset: 0 50% 50% 0;
  background: var(--loader-face, var(--color-primary-500));
  transform: scale(var(--s,1)) perspective(150px) rotateY(0deg);
  transform-origin: bottom right;
  animation: app-loading-l7-1 .5s infinite linear alternate;
}
.app-loading-loader::after {
  --s: -1,-1;
}
@keyframes app-loading-l7-0 {
  0%  { transform: scaleX(1) rotate(0deg); }
  50% { transform: scaleX(-1) rotate(-90deg); }
}
@keyframes app-loading-l7-1 {
  0%    { --loader-face: var(--color-primary-500); transform: scale(var(--s,1)) perspective(150px) rotateX(0deg); }
  49.99% { --loader-face: var(--color-primary-500); transform: scale(var(--s,1)) perspective(150px) rotateX(-90deg); }
  50%    { --loader-face: var(--color-primary-300); transform: scale(var(--s,1)) perspective(150px) rotateX(-90deg); }
  100%   { --loader-face: var(--color-primary-300); transform: scale(var(--s,1)) perspective(150px) rotateX(-180deg); }
}
`}
			</style>
		</div>
	);
}