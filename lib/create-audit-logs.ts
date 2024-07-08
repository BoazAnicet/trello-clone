import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

interface Props {
	entityId: string;
	entityType: ENTITY_TYPE;
	entityTitle: string;
	action: ACTION;
}

export const createAuditLog = async (props: Props) => {
	const user = await currentUser();

	try {
		const { orgId } = auth();

		if (!user || !orgId) {
			throw new Error("User not found");
		}

		const { action, entityId, entityTitle, entityType } = props;

		await db.auditLog.create({
			data: {
				action,
				entityId,
				entityTitle,
				entityType,
				orgId,
				userId: user?.id,
				userImage: user?.imageUrl,
				userName: user?.firstName + " " + user?.lastName,
			},
		});
	} catch (error) {
		console.log("[AUDIT_LOG_ERROR]", error);
	}
};
