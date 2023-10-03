# react-order-salchipapas

La Aplicación de Pedidos de Salchipapas es una aplicación frontend amigable con el usuario, desarrollada utilizando React.js, con el objetivo de proporcionar una plataforma interactiva para que los clientes realicen y sigan sus pedidos de "salchipapas". Esta aplicación actúa como cliente, interactuando con un backend sin servidor desplegado en AWS, que encapsula varios servicios de AWS como AWS Lambda, API Gateway, SQS y DynamoDB.

## Funcionalidad

### Frontend (Aplicación React)

#### 1. **Realizar Pedido**
   - **Entrada del Usuario:** La aplicación ofrece un formulario sencillo, permitiendo a los usuarios introducir su nombre, dirección y la cantidad de salchipapas que desean pedir.
   - **Interacción con Backend:** Al enviar el formulario, la aplicación realiza una petición HTTP POST al backend a través de API Gateway, lo que activa la función Lambda `createOrder`. Esta función genera un ID de pedido único utilizando UUID, envía un mensaje (los detalles del pedido) a una cola SQS y responde al frontend con la confirmación y el ID del pedido.
   
#### 2. **Verificar Estado del Pedido**
   - **Entrada del Usuario:** Los usuarios pueden verificar el estado de su pedido introduciendo su ID de pedido único.
   - **Interacción con Backend:** Se realiza una petición HTTP GET al backend utilizando el ID del pedido. La función Lambda `statusOrder` recupera el estado actual del pedido desde DynamoDB y lo devuelve al frontend.

### Backend (Arquitectura Serverless AWS)

- **AWS Lambda:** Comprende varios microservicios, cada uno dedicado a una tarea específica (crear, preparar, enviar y comprobar estados de los pedidos).
- **API Gateway:** Expone endpoints HTTP al frontend de React, permitiéndole interactuar con los servicios del backend.
- **SQS:** Gestiona los mensajes de pedido en una cola, asegurando que se procesen en orden y previniendo la pérdida de mensajes.
- **DynamoDB:** Almacena pedidos de manera persistente, permitiendo que varias funciones Lambda accedan y actualicen los datos del pedido.
  
## Configuración y Ejecución Local

### Prerrequisitos

- Node.js (versión 14.x o posterior)
- npm (versión 6.x o posterior)
