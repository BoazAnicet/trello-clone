import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-modal";

interface CardItemProps {
  index: number;
  data: Card;
}

export const CardItem = ({ index, data }: CardItemProps) => {
  const cardModal = useCardModal();

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
          role="button"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={() => cardModal.onOpen(data.id)}
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};
