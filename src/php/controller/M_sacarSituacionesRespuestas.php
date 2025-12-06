<?php
require_once 'database/conexion.php';

class M_sacarSituacionesRespuestas extends Conectar {

    public function obtenerSituacionesRespuestas() {
        $pdo = Conectar::$conexion; // instancia PDO

        $sql = "
            SELECT s.idSituacion,
                   s.situacion,
                   r.respuestaSituacion
            FROM situaciones s
            INNER JOIN respuestasSituaciones r 
            ON r.idSituacion = s.idSituacion
            ORDER BY s.idSituacion
        ";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Agrupar por situación
        $situaciones = [];
        foreach ($rows as $row) {
            $id = $row['idSituacion'];

            if (!isset($situaciones[$id])) {
                $situaciones[$id] = [
                    'idSituacion' => $id,
                    'situacion'   => $row['situacion'],
                    'respuestas'  => []
                ];
            }

            $situaciones[$id]['respuestas'][] = $row['respuestaSituacion'];
        }

        // Reindexar para que sea un array numérico limpio
        return ['situaciones' => array_values($situaciones)];
    }
}
