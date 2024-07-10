"use client";

import { useEffect, useState } from "react";
import { CardModal } from "@/components/modals/card-modal";
import { ProModal } from "@/components/modals/pro-modal";

export const ModalProvider = () => {
	const [mounted, setIsMounted] = useState<boolean>(false);

	// This ensures that the modal is rendered on the client side
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<CardModal />
			<ProModal />
		</>
	);
};
