import { Button, Card, Group, Paper, Text, Title } from "@mantine/core";


export const ProductCard: React.FunctionComponent<{
  title?: string;
  description?: string;
}> = ({title="", description=""}) => {
  return(
    <Paper shadow="xl" radius="xl" p="md">
      <Card>
        <Card.Section>
          <Title>{title}</Title>
        </Card.Section>
      <Group>
        <Text>{description}</Text>
      </Group>
      <Button>Buy this</Button>
      </Card>
    </Paper>
  )
}