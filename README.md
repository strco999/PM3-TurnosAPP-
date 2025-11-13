# USER STORIES
1. *Autenticacion de usuarios: *
- Como usuario invitado o anonimo, quiero poder registrarme o logearme en la aplicacion.
- Criterios de aceptacion:
- El usuario debe poder registrarse proporcionando un correo y una contraseña.
- El usuario debe poder autenticarse proporcionado el y la contraseña.
- El usuario no debe poder registrar un turno sin autenticarse.

2. *Reserva de turnos: *
- Como usuario autenticado, quiero poder agendar un turno en una fecha y hora espeficas.
- Criterios de aceptacion:
- El usuario solo podra seleccionar horarios entra 9am a 4pm, excluyendo los fines de semana.
- En caso de querer registrar un turno fuera de la franja horaria, se mostrara un
mensaje de error.
3. *Visualizacion de turnos:*
- Como usuario autenticado, quiero poder ver mi lista de turnos reservados.
- Criterios de aceptacion:
- El usuario debe poder ver una lista de turno futuros y pasados.
4. *Cancelacion de turnos:*
- Como usuario autenticado, quiero poder cancelar un turno reservado hasta un dia antes de la fecha resevada.
- Criterios de aceptacion:
- El usuario va a poder cancelar su turno solo hasta un dia antes de su fecha de reserva.
- No podra cancelar un turno el mismo dia o posterior a la fecha de reserva.
- Al cancelar el turno se vera reflejado en el status del mismo.
5. *Confirmacion de reserva o cancelacion:*
- Como usuario autenticado, debo ver sobre el estado de la reserva de un turno, si activo o cancelado.

