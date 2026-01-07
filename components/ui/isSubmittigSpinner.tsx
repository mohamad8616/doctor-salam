import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerIsSubmitting({
  text,
  text2,
}: {
  text: string;
  text2?: string;
}) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemContent>
          <ItemTitle className="line-clamp-1">{text}</ItemTitle>
        </ItemContent>

        {text2 && <ItemTitle className="line-clamp-1">{text2}</ItemTitle>}

        <ItemMedia>
          <Spinner />
        </ItemMedia>
      </Item>
    </div>
  );
}
