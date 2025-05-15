import {useMemo} from "react";
import {useSort} from "../../hooks/";
import {Item, ListProps} from "../../interfaces";
import { RefObject } from "react";
import {Box, Button, Center, Group, Loader, SimpleGrid} from "@mantine/core";
import {IconSortAscendingLetters, IconSortDescendingLetters} from "@tabler/icons-react";


export function List<T extends Item>({
                            items,
                            loading,
                            error,
                            lastItemRef,
                            renderItem
                        }:ListProps<T>){

    const {sort, toggleSort} = useSort()
    const sortedData = useMemo(() => {
        return [...items?? []].sort((a, b) => {
            const cmp = a.created.localeCompare(b.created, undefined, {sensitivity: 'base'});
            return sort === 'asc' ? cmp : -cmp;
        });
    }, [items, sort]);

    return <>
        {error &&
            <Center maw={400} h={100}>
                <Box color="var(--mantine-color-red)">Ошибка загрузки. {String(error)}</Box>
            </Center>
        }

        <Group mb={16}>
            <Button leftSection={sort === 'asc' ? <IconSortAscendingLetters/> : <IconSortDescendingLetters/>}  onClick={toggleSort}>
                Сортировать по {sort === 'asc' ? 'возрастанию' : 'убыванию'}
            </Button>
        </Group>

        <SimpleGrid cols={4}>
            {sortedData.map((item, index) => {
                const isLast = index === sortedData.length - 1;
                return (
                    <div key={(item as any).id ?? index}
                         ref={isLast ? (lastItemRef as RefObject<HTMLDivElement>) : null}>
                        {renderItem(item)}
                    </div>
                );
            })}

            {loading &&  <Loader color="blue" size="lg" pos="absolute" top="50%" left="50%" style={{ transform: 'translate(-50%, -50%)' }} />}
        </SimpleGrid>
    </>
}