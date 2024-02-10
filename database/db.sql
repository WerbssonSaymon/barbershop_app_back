CREATE TABLE `brgfn7xdnrcjmp4fhp9x`.`agendamentos` (
    `id` INT NOT NULL AUTO_INCREMENT ,
     `nome` VARCHAR(255) NOT NULL ,
      `servico` VARCHAR(255) NOT NULL ,
       `data` DATE NOT NULL ,
        `horario` TIME NOT NULL ,
         PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

CREATE TABLE `brgfn7xdnrcjmp4fhp9x`.`servicos` (
    `id` INT NOT NULL AUTO_INCREMENT ,
     `servico` VARCHAR(255) NOT NULL ,
      `valor` DOUBLE NOT NULL ,
       PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;