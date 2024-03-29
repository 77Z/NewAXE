/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 */

import { createRoot } from 'react-dom/client';
import styles from "./BasicSlider.module.css";

interface BasicSliderProps {
	vertical: boolean;
}

function Content({ vertical }: BasicSliderProps) {
	return (
		<h1 className={vertical ? styles.verticalSlider : styles.horizontalSlider}>Hello, React!</h1>
	);
}

const root = createRoot(document.getElementById("content"));
root.render(Content({ vertical: true }));