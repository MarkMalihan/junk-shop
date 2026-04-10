import { getCurrentWindow } from "@tauri-apps/api/window";
import { Maximize, Minimize, Minus, Square, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import type { ReactNode } from "react";
import { Button } from "./button";
import Logo from "./logo";

const DEFAULT_TITLE = "Local Memo";

interface TitlebarProps {
	title?: string;
	rightContent?: ReactNode;
}

export function Titlebar({
	title: titleProp,
	rightContent,
}: TitlebarProps) {
	const [docTitle, setDocTitle] = useState(DEFAULT_TITLE);
	const location = useLocation();

	// Sync with document.title on every route change (matches each route’s meta title).
	useEffect(() => {
		if (typeof document === "undefined") return;
		setDocTitle(document.title || DEFAULT_TITLE);
	}, [location.key]);

	// Also observe <title> for same-route updates (e.g. note title edited).
	useEffect(() => {
		if (typeof document === "undefined") return;
		const el = document.querySelector("title");
		if (!el) return;

		const observer = new MutationObserver(() => {
			setDocTitle(document.title || DEFAULT_TITLE);
		});
		observer.observe(el, { childList: true, characterData: true, subtree: true });

		return () => observer.disconnect();
	}, []);

	// When in Tauri, keep the native window title in sync (taskbar, alt-tab).
	useEffect(() => {
		const title = titleProp ?? docTitle;
		if (typeof window === "undefined" || !(window as unknown as { __TAURI__?: unknown }).__TAURI__) return;
		getCurrentWindow().setTitle(title);
	}, [titleProp, docTitle]);

	const title = titleProp ?? docTitle;

	const handleMinimize = () => {
		if (typeof window === "undefined") return;
		getCurrentWindow().minimize();
	};

	const handleMaximize = () => {
		if (typeof window === "undefined") return;
		getCurrentWindow().toggleMaximize();
	};

	const handleClose = () => {
		if (typeof window === "undefined") return;
		getCurrentWindow().close();
	};

	return (
		<div
			className="bg-primary-800 text-white flex items-center justify-between h-9 pl-3 select-none"
			data-tauri-drag-region
		>
			<div className="flex items-center gap-2 text-xs font-medium">
				<Logo size={20} />
				<span>{title}</span>
				{rightContent}
			</div>
			<div className="flex items-center" data-tauri-drag-region={false}>
				<Button
					variant="ghost"
					onClick={handleMinimize}
					className="hover:bg-gray-300/40 rounded-none w-12"
					title="Minimize"
				>
					<Minus />
				</Button>
				<Button
					variant="ghost"
					onClick={handleMaximize}
					className="hover:bg-gray-300/40 rounded-none w-12"
					title="Maximize"
				>
					<Square />
				</Button>
				<Button
					variant="ghost"
					onClick={handleClose}
					className="hover:bg-destructive dark:hover:bg-destructive/70 rounded-none w-12"
					title="Close"
				>
					<X />
				</Button>
			</div>
		</div>
	);
}

